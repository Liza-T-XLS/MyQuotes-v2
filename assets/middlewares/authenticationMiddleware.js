// == Imports

import axios from 'axios';

import {
  LOG_IN,
  showServerError,
  setLoginLoader,
  setIsLogged,
  LOG_OUT,
  CHECK_IS_LOGGED,
  clearLogInForm,
  setLogoutLoader,
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
        .then(() => {
          store.dispatch(setLoginLoader(false));
          store.dispatch(setIsLogged(true));
          store.dispatch(clearLogInForm());
        })
        .catch((error) => {
          store.dispatch(setLoginLoader(false));
          if (error.response.data.error === 'Your account has not been activated yet. Please click on the link that was sent to you upon registration.') {
            store.dispatch(showServerError(error.response.data.error));
          } else {
            store.dispatch(showServerError('Invalid credentials'));
          }
        })
        .finally(() => {
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
          store.dispatch(setIsLogged(false));
          store.dispatch(setLogoutLoader(false));
        })
        .catch(() => {
          store.dispatch(setLogoutLoader(false));
        })
        .finally(() => {
          store.dispatch(setLogoutLoader(false));
        });
      next(action);
      break;
    case CHECK_IS_LOGGED:
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/islogged',
      })
        .then((response) => {
          store.dispatch(setIsLogged(response.data.isLogged));
        })
        .catch(() => {
        })
        .finally(() => {
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default authenticationMiddleware;
