// == Imports

import { SAVE_QUOTES, CHANGE_ADD_QUOTE_FORM_STATUS, SAVE_HEADER_HEIGHT, SAVE_FORM_HEIGHT } from '../actions/quotes';

// == Initial state

const initialState = {
  quotes: [],
  addQuoteFormStatus: false,
  addQuoteFormHeight: 1,
  headerHeight: 0,
};

// == Reducer

const quotesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
      };
    case CHANGE_ADD_QUOTE_FORM_STATUS:
      return {
        ...state,
        addQuoteFormStatus: !state.addQuoteFormStatus,
      };
    case SAVE_HEADER_HEIGHT:
      return {
        ...state,
        headerHeight: action.height,
      };
    case SAVE_FORM_HEIGHT:
      return {
        ...state,
        addQuoteFormHeight: action.height,
      };
    default: return state;
  }
};

// == Export

export default quotesReducer;
