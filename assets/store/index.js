// == Imports

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import registrationReducer from '../reducers/registration';

import registrationMiddleware from '../middlewares/registrationMiddleware';

// == Components

const enhancers = composeWithDevTools(
  applyMiddleware(
    registrationMiddleware,
    // ... other middlewares
  ),
);

const store = createStore(
  // reducer
  registrationReducer,
  // enhancer
  enhancers,
);

// == Export

export default store;
