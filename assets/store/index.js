// == Imports

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

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
  reducer,
  // enhancer
  enhancers,
);

// == Export

export default store;
