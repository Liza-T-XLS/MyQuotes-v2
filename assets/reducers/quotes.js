// == Imports

import { SAVE_QUOTES } from '../actions/quotes';

// == Initial state

const initialState = {
  quotes: [],
};

// == Reducer

const quotesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
      };
    default: return state;
  }
};

// == Export

export default quotesReducer;
