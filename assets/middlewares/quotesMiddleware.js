// == Imports

import axios from 'axios';

import {
  loadQuotes,
  LOAD_QUOTES,
  saveQuotes,
  ADD_QUOTE,
  clearAddQuoteForm,
  saveFormHeight,
  changeAddQuoteFormStatus,
  savePageQuantity,
} from '../actions/quotes';

// == Middleware

const quotesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_QUOTES:
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/quotes/show',
        data: {
          currentPage: store.getState().quotes.currentPage,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(savePageQuantity(response.data.pageQuantity));
          store.dispatch(saveQuotes(response.data.quotes));
        })
        .catch((error) => {
          console.warn(error);
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
          store.dispatch(clearAddQuoteForm());
          store.dispatch(saveFormHeight(1));
          store.dispatch(changeAddQuoteFormStatus());
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
