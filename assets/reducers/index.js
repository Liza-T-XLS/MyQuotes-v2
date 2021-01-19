// == Imports

import { combineReducers } from 'redux';

import registrationReducer from './registration';
import authenticationReducer from './authentication';
import quotesReducer from './quotes';

// == Component

const rootReducer = combineReducers({
  registration: registrationReducer,
  authentication: authenticationReducer,
  quotes: quotesReducer,
});

// == Export

export default rootReducer;
