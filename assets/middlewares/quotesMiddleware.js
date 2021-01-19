// == Imports

import axios from 'axios';

import {
  LOAD_QUOTES,
  saveQuotes,
} from '../actions/quotes';

// == Middleware

const quotesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_QUOTES:
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/quotes',
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveQuotes(response.data));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('quotes loading failed');
        })
        .finally(() => {
          console.log('finally');
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default quotesMiddleware;
