// == Imports

import { SAVE_QUOTES, CHANGE_ADD_QUOTE_FORM_STATUS } from '../actions/quotes';

// == Initial state

const initialState = {
  quotes: [],
  addQuoteFormStatus: false,
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
    default: return state;
  }
};

// == Export

export default quotesReducer;
