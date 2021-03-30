// == Imports

import { combineReducers } from 'redux';

import registrationReducer from './registration';
import authenticationReducer from './authentication';
import quotesReducer from './quotes';
import navReducer from './nav';
import settingsReducer from './settings';

// == Component

const rootReducer = combineReducers({
  registration: registrationReducer,
  authentication: authenticationReducer,
  quotes: quotesReducer,
  nav: navReducer,
  settings: settingsReducer,
});

// == Export

export default rootReducer;
