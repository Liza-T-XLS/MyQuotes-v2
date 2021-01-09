// == Imports

import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';
import registrationReducer from '../reducers/registration';

// == Components

const store = createStore(
  // reducer
  registrationReducer,
  // enhancer
  devToolsEnhancer(),
);

// == Export

export default store;
