// == Imports

import axios from 'axios';

import {
  REQUEST_TOKEN,
  setPasswordForgottenLoader,
  addPasswordForgottenServerErrors,
  setTokenIsSent,
  setUserId,
  CHECK_TOKEN,
  setResetAuthorization,
  RESET_PASSWORD,
  setFinalStep,
  setPasswordChanged,
} from '../actions/passwordForgotten';

// == Middleware

const passwordForgottenMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/userdata/password-forgotten',
        data: {
          email: store.getState().passwordForgotten.email,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(setTokenIsSent(true));
          store.dispatch(setUserId(response.data.userId));
          store.dispatch(setPasswordForgottenLoader(false));
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(addPasswordForgottenServerErrors(error.response.data));
          store.dispatch(setPasswordForgottenLoader(false));
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setPasswordForgottenLoader(false));
        });
      next(action);
      break;
    case CHECK_TOKEN:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/userdata/password-token-check',
        data: {
          userId: store.getState().passwordForgotten.userId,
          token: store.getState().passwordForgotten.token,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(setResetAuthorization(true));
          store.dispatch(setPasswordForgottenLoader(false));
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(addPasswordForgottenServerErrors(error.response.data));
          store.dispatch(setPasswordForgottenLoader(false));
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setPasswordForgottenLoader(false));
        });
      next(action);
      break;
    case RESET_PASSWORD:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/userdata/password-reset',
        data: {
          userId: store.getState().passwordForgotten.userId,
          token: store.getState().passwordForgotten.token,
          newPassword: store.getState().passwordForgotten.newPassword,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(setFinalStep(true));
          store.dispatch(setPasswordChanged(true));
          store.dispatch(setPasswordForgottenLoader(false));
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(addPasswordForgottenServerErrors(error.response.data));
          store.dispatch(setPasswordForgottenLoader(false));
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setPasswordForgottenLoader(false));
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default passwordForgottenMiddleware;
