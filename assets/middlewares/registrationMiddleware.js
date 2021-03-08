// == Imports

import axios from 'axios';

import {
  SIGN_UP,
  setLoader,
  confirmSignUp,
  addServerErrors,
  ACTIVATE_USER,
  setActivationLoader,
  confirmActivation,
} from '../actions/registration';

// == Middleware

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/registration',
        data: {
          pseudonym: store.getState().registration.pseudonym,
          email: store.getState().registration.email,
          password: store.getState().registration.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(confirmSignUp(true));
          store.dispatch(setLoader(false));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          store.dispatch(setLoader(false));
          store.dispatch(addServerErrors(error.response.data));
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setLoader(false));
        });
      next(action);
      break;
    case ACTIVATE_USER: {
      // email is everything in the URL between "?email="" and "&""
      const email = window.location.search.match('\\?email=(.*)&')[1];
      // hash is everything in the URL after "&hash="
      const hash = window.location.search.match('&hash=(.*)')[1];
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/activation',
        data: {
          email,
          hash,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(confirmActivation(true));
          store.dispatch(setActivationLoader(false));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          store.dispatch(setActivationLoader(false));
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setActivationLoader(false));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

// == Export

export default registrationMiddleware;
