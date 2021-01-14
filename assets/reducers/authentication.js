// == Imports

import { CHANGE_FIELD, SHOW_SERVER_ERROR, CLEAR_LOG_IN_FORM } from '../actions/authentication';

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
    case SHOW_SERVER_ERROR: {
      const newFormErrors = {
        ...state.formErrors,
        error: 'Invalid credentials',
      };
      return {
        ...state,
        formErrors: newFormErrors,
      };
    }
    case CLEAR_LOG_IN_FORM:
      return {
        ...state,
        ...initialState,
      };
    default: return state;
  }
};

// == Export

export default authenticationReducer;
