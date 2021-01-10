// == Imports

import axios from 'axios';

import { SIGN_UP, setLoader } from '../actions/registration';

// == Middleware

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/registration',
        data: {
          pseudonym: store.getState().pseudonym,
          email: store.getState().email,
          password: store.getState().password,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setLoader(false));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setLoader(false));
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
