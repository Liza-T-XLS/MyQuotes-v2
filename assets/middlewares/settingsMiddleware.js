// == Imports

import axios from 'axios';

import {
  LOAD_USER_DATA,
  setUserData,
  SUBMIT_CHANGES,
  setSettingsLoader,
  clearUserDataChanges,
  loadUserData,
  setSettingsFlash,
  addServerEditErrors,
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
          store.dispatch(setUserData(response.data.pseudonym, response.data.email));
        })
        .catch(() => {
        })
        .finally(() => {
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
        .then(() => {
          store.dispatch(clearUserDataChanges());
          store.dispatch(loadUserData());
          store.dispatch(setSettingsLoader(false));
          store.dispatch(setSettingsFlash(true));
          setTimeout(() => {
            store.dispatch(setSettingsFlash(false));
          }, 5000);
        })
        .catch((error) => {
          store.dispatch(addServerEditErrors(error.response.data));
          store.dispatch(setSettingsLoader(false));
        })
        .finally(() => {
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
