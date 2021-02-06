// == Imports

import axios from 'axios';

import {
  loadQuotes,
  LOAD_QUOTES,
  saveQuotes,
  ADD_QUOTE,
  clearQuoteForm,
  saveFormHeight,
  changeQuoteFormStatus,
  savePageQuantity,
  EDIT_QUOTE,
  DELETE_QUOTE,
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
          console.log(response.data.quotes[0].tags.length);
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
          quote: {
            text: store.getState().quotes.quoteText,
            authorFirstName: store.getState().quotes.authorFirstName,
            authorLastName: store.getState().quotes.authorLastName,
            characterName: store.getState().quotes.characterName,
            mediumTitle: store.getState().quotes.mediumTitle,
          },
          tags: store.getState().quotes.tags,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(loadQuotes());
          store.dispatch(clearQuoteForm());
          store.dispatch(saveFormHeight(1));
          store.dispatch(changeQuoteFormStatus());
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
    case EDIT_QUOTE:
      axios({
        method: 'put',
        url: 'http://localhost:8000/api/quotes',
        data: {
          quote: {
            id: store.getState().quotes.quoteId,
            text: store.getState().quotes.quoteText,
            authorFirstName: store.getState().quotes.authorFirstName,
            authorLastName: store.getState().quotes.authorLastName,
            characterName: store.getState().quotes.characterName,
            mediumTitle: store.getState().quotes.mediumTitle,
          },
          tags: store.getState().quotes.tags,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(loadQuotes());
          store.dispatch(clearQuoteForm());
          store.dispatch(saveFormHeight(1));
          store.dispatch(changeQuoteFormStatus());
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('quote edit failed');
        })
        .finally(() => {
          console.log('finally');
        });
      next(action);
      break;
    case DELETE_QUOTE:
      axios({
        method: 'delete',
        url: 'http://localhost:8000/api/quotes',
        data: {
          quote: {
            id: action.quoteId,
          },
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(loadQuotes());
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('quote delete failed');
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
