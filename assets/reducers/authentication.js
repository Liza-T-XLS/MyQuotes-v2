// == Imports

import {
  CHANGE_LOGIN_FIELD,
  SHOW_SERVER_ERROR,
  CLEAR_LOG_IN_FORM,
  SET_LOGIN_LOADER,
  SET_IS_LOGGED,
  SET_LOGOUT_LOADER,
} from '../actions/authentication';

// == Initial state

const initialState = {
  email: '',
  password: '',
  formErrors: {
    error: '',
  },
  loginLoader: false,
  isLogged: false,
  logoutLoader: true,
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    case SHOW_SERVER_ERROR: {
      const newFormErrors = {
        ...state.formErrors,
        error: action.errorMsg,
      };
      return {
        ...state,
        formErrors: newFormErrors,
      };
    }
    case CLEAR_LOG_IN_FORM:
      return {
        ...state,
        email: '',
        password: '',
        formErrors: {
          error: '',
        },
      };
    case SET_LOGIN_LOADER:
      return {
        ...state,
        loginLoader: action.boolean,
      };
    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.boolean,
      };
    case SET_LOGOUT_LOADER:
      return {
        ...state,
        logoutLoader: action.boolean,
      };
    default: return state;
  }
};

// == Export

export default authenticationReducer;
