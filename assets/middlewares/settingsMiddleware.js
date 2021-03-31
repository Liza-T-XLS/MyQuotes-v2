// == Imports

import axios from 'axios';

import {
  LOAD_USER_DATA,
  setUserData,
  SUBMIT_CHANGES,
  setSettingsLoader,
  clearUserDataChanges,
  loadUserData,
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
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data.error);
          console.log('userdata failed');
        })
        .finally(() => {
          console.log('finally');
        });
      next(action);
      break;
    case SUBMIT_CHANGES:
      axios({
        method: 'patch',
        url: 'http://localhost:8000/api/userdata',
        data: {
          updatedUser: {
            pseudonym: store.getState().settings.pseudonym,
            email: store.getState().settings.email,
            password: store.getState().settings.password,
          },
          currentPassword: store.getState().settings.currentPassword,
        },
      })
        .then((response) => {
          console.log(response.data);
          console.log('userdata updated');
          store.dispatch(clearUserDataChanges());
          store.dispatch(loadUserData());
          store.dispatch(setSettingsLoader(false));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data.error);
          console.log('userdata update failed');
          store.dispatch(setSettingsLoader(false));
        })
        .finally(() => {
          console.log('finally');
          store.dispatch(setSettingsLoader(false));
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default settingsMiddleware;
