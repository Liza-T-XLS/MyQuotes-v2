// == Imports

import { CHANGE_FIELD, ADD_SERVER_ERROR } from '../actions/authentication';

// == Initial state

const initialState = {
  email: '',
  password: '',
  formErrors: {
    error: '',
  },
  loader: false,
  registrationComplete: false,
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
    case ADD_SERVER_ERROR: {
      const newFormErrors = {
        ...state.formErrors,
        error: action.error.error,
      };
      return {
        ...state,
        formErrors: newFormErrors,
      };
    }
    default: return state;
  }
};

// == Export

export default authenticationReducer;
