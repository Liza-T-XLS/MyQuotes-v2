// == Imports

import axios from 'axios';

import {
  SIGN_UP,
  setLoader,
  confirmSignUp,
  addServerErrors,
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

    default:
      next(action);
  }
};

// == Export

export default registrationMiddleware;
