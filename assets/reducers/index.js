// == Imports

import { combineReducers } from 'redux';

import registrationReducer from './registration';
import authenticationReducer from './authentication';
import quotesReducer from './quotes';
import navReducer from './nav';

// == Component

const rootReducer = combineReducers({
  registration: registrationReducer,
  authentication: authenticationReducer,
  quotes: quotesReducer,
  nav: navReducer,
});

// == Export

export default rootReducer;
