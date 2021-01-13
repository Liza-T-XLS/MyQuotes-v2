// == Imports

import { CHANGE_FIELD } from '../actions/authentication';

// == Initial state

const initialState = {
  email: '',
  password: '',
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    default: return state;
  }
};

// == Export

export default authenticationReducer;
