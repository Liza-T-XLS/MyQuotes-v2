// == Imports

import axios from 'axios';

import {
  LOAD_USER_DATA,
  setUserData,
} from '../actions/settings';

// == Middleware

const settingsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_USER_DATA:
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/userdata',
      })
        .then((response) => {
          console.log(response.data);
          console.log('userdata');
          store.dispatch(setUserData(response.data.pseudonym, response.data.email));
          // store.dispatch(setIsLogged(true));
          // store.dispatch(clearLogInForm());
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data.error);
          console.log('userdata failed');
          // store.dispatch(setLoginLoader(false));
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

export default settingsMiddleware;
