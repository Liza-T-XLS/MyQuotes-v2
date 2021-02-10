// == Imports

import {
  SET_OPEN,
} from '../actions/nav';

// == Initial state

const initialState = {
  open: false,
};

const navReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        open: action.boolean,
      };
    default: return state;
  }
};

// == Export

export default navReducer;
