// == Imports

import { combineReducers } from 'redux';

import registrationReducer from './registration';
import authenticationReducer from './authentication';

// == Component

const rootReducer = combineReducers({
  registration: registrationReducer,
  authentication: authenticationReducer,
});

// == Export

export default rootReducer;
