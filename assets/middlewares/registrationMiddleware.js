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
  const baseURL = process.env.BASE_URL;
  switch (action.type) {
    case SIGN_UP:
      axios({
        method: 'post',
        url: `${baseURL}/api/registration`,
        data: {
          pseudonym: store.getState().registration.pseudonym,
          email: store.getState().registration.email,
          password: store.getState().registration.password,
        },
      })
        .then(() => {
          store.dispatch(confirmSignUp(true));
          store.dispatch(setLoader(false));
        })
        .catch((error) => {
          store.dispatch(setLoader(false));
          store.dispatch(addServerErrors(error.response.data));
        })
        .finally(() => {
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
        url: `${baseURL}/api/activation`,
        data: {
          email,
          hash,
        },
      })
        .then(() => {
          store.dispatch(confirmActivation(true));
          store.dispatch(setActivationLoader(false));
        })
        .catch(() => {
          store.dispatch(setActivationLoader(false));
        })
        .finally(() => {
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
