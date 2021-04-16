/* eslint-disable eqeqeq */

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
  LOAD_TAGS,
  saveUserTags,
  loadTags,
  saveCurrentPage,
  saveSelectedTag,
  setQuotesFlash,
  setQuotesFlashMsg,
  addServerQuoteErrors,
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
          tag: store.getState().quotes.selectedTag,
          search: store.getState().quotes.search,
        },
      })
        .then((response) => {
          store.dispatch(savePageQuantity(response.data.pageQuantity));
          store.dispatch(saveQuotes(response.data.quotes));
        })
        .catch(() => {
          store.dispatch(setQuotesFlashMsg('Oops! Something went wrong and the quotes could not be loaded...'));
          store.dispatch(setQuotesFlash(true));
          setTimeout(() => {
            store.dispatch(setQuotesFlash(false));
          }, 5000);
        })
        .finally(() => {
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
          store.dispatch(saveCurrentPage(response.data.pageQuantity));
          store.dispatch(loadQuotes());
          store.dispatch(loadTags());
          store.dispatch(clearQuoteForm());
          store.dispatch(saveFormHeight(1));
          store.dispatch(changeQuoteFormStatus());
        })
        .catch((error) => {
          if (error.response.data.message) {
            store.dispatch(setQuotesFlashMsg(error.response.data.message));
            store.dispatch(setQuotesFlash(true));
            setTimeout(() => {
              store.dispatch(setQuotesFlash(false));
            }, 5000);
          } else {
            store.dispatch(addServerQuoteErrors(error.response.data));
          }
        })
        .finally(() => {
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
        .then(() => {
          store.dispatch(loadQuotes());
          store.dispatch(loadTags());
          store.dispatch(clearQuoteForm());
          store.dispatch(saveFormHeight(1));
          store.dispatch(changeQuoteFormStatus());
        })
        .catch((error) => {
          if (error.response.data.message) {
            store.dispatch(setQuotesFlashMsg(error.response.data.message));
            store.dispatch(setQuotesFlash(true));
            setTimeout(() => {
              store.dispatch(setQuotesFlash(false));
            }, 5000);
          } else {
            store.dispatch(addServerQuoteErrors(error.response.data));
          }
        })
        .finally(() => {
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
          if (response.data.oldTags.find((tag) => tag == store.getState().quotes.selectedTag)) {
            store.dispatch(saveSelectedTag(''));
          }
          store.dispatch(loadQuotes());
          store.dispatch(loadTags());
        })
        .catch((error) => {
          store.dispatch(setQuotesFlashMsg(error.response.data.message));
          store.dispatch(setQuotesFlash(true));
          setTimeout(() => {
            store.dispatch(setQuotesFlash(false));
          }, 5000);
        })
        .finally(() => {
        });
      next(action);
      break;
    case LOAD_TAGS:
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/tags',
      })
        .then((response) => {
          store.dispatch(saveUserTags(response.data));
        })
        .catch(() => {
          store.dispatch(setQuotesFlashMsg('Oops! Something went wrong and the tags could not be loaded...'));
          store.dispatch(setQuotesFlash(true));
          setTimeout(() => {
            store.dispatch(setQuotesFlash(false));
          }, 5000);
        })
        .finally(() => {
        });
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export

export default quotesMiddleware;
