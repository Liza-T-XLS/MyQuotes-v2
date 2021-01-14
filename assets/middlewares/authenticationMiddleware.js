// == Imports

import axios from 'axios';

import {
  LOG_IN,
  showServerError,
} from '../actions/authentication';

// == Middleware

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
        data: {
          username: store.getState().authentication.email,
          password: store.getState().authentication.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          console.log('logged');
          // store.dispatch(confirmSignUp(true));
          // store.dispatch(setLoader(false));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('login failed');
          // store.dispatch(setLoader(false));
          store.dispatch(showServerError());
        })
        .finally(() => {
          console.log('finally');
          // store.dispatch(setLoader(false));
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default authenticationMiddleware;
