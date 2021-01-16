// == Imports

import axios from 'axios';

import {
  LOG_IN,
  showServerError,
  setLoginLoader,
  setIsLogged,
  LOG_OUT,
  CHECK_IS_LOGGED,
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
        // withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
          console.log('logged');
          store.dispatch(setLoginLoader(false));
          store.dispatch(setIsLogged(true));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('login failed');
          store.dispatch(setLoginLoader(false));
          store.dispatch(showServerError());
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setLoginLoader(false));
        });
      next(action);
      break;
    case LOG_OUT:
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/logout',
      })
        .then(() => {
          console.log('logged out');
          store.dispatch(setIsLogged(false));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('logout failed');
        })
        .finally(() => {
          console.log('finally');
        });
      next(action);
      break;
    case CHECK_IS_LOGGED:
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/islogged',
      })
        .then((response) => {
          console.log('islogged');
          console.log(response.data);
          store.dispatch(setIsLogged(response.data.isLogged));
        })
        .catch((error) => {
          console.warn(error);
          console.log('islogged failed');
        })
        .finally(() => {
          console.log('finally');
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default authenticationMiddleware;
