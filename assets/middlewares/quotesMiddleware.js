// == Imports

import axios from 'axios';

import {
  loadQuotes,
  LOAD_QUOTES,
  saveQuotes,
  ADD_QUOTE,
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
    case ADD_QUOTE:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/quotes',
        data: {
          text: store.getState().quotes.quoteText,
          authorFirstName: store.getState().quotes.authorFirstName,
          authorLastName: store.getState().quotes.authorLastName,
          characterName: store.getState().quotes.characterName,
          mediumTitle: store.getState().quotes.mediumTitle,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(loadQuotes());
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('quote add failed');
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
