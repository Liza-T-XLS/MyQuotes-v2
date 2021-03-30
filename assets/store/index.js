// == Imports

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

import registrationMiddleware from '../middlewares/registrationMiddleware';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';
import quotesMiddleware from '../middlewares/quotesMiddleware';
import settingsMiddleware from '../middlewares/settingsMiddleware';

// == Components

const enhancers = composeWithDevTools(
  applyMiddleware(
    registrationMiddleware,
    authenticationMiddleware,
    quotesMiddleware,
    settingsMiddleware,
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
