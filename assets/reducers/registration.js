// == Imports

import { CHANGE_FIELD, CHECK_ERRORS, SET_LOADER, CONFIRM_SIGN_UP } from '../actions/registration';
import { validEmailRegex } from '../utils/regex';

// == Initial State

const initialState = {
  pseudonym: '',
  email: '',
  password: '',
  confirmedPassword: '',
  formErrors: {
    pseudonym: '',
    email: '',
    password: '',
    confirmedPassword: '',
  },
  loader: false,
  registrationComplete: false,
};

// == Reducer

const registrationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    case CHECK_ERRORS: {
      switch (action.fieldName) {
        case 'pseudonym': {
          let pseudonymMsg = '';
          if (state.pseudonym.length < 2) {
            pseudonymMsg = 'Your pseudonym must be at least 2 characters long.';
          }
          const newFormErrors = {
            ...state.formErrors,
            pseudonym: pseudonymMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'email': {
          let emailMsg = '';
          if (!validEmailRegex.test(state.email)) {
            emailMsg = 'The email you entered is not valid.';
          }
          const newFormErrors = {
            ...state.formErrors,
            email: emailMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'password': {
          let passwordMsg = '';
          if (state.password.length < 4) {
            passwordMsg = 'Your password must be at least 4 characters long.';
          }
          const newFormErrors = {
            ...state.formErrors,
            password: passwordMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'confirmedPassword': {
          let confirmedPasswordMsg = '';
          if (state.confirmedPassword !== state.password) {
            confirmedPasswordMsg = 'The passwords you entered do not match..';
          }
          const newFormErrors = {
            ...state.formErrors,
            confirmedPassword: confirmedPasswordMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        default: return state;
      }
    }
    case SET_LOADER:
      return {
        ...state,
        loader: action.boolean,
      };
    case CONFIRM_SIGN_UP:
      return {
        ...state,
        registrationComplete: action.boolean,
        pseudonym: '',
        email: '',
        password: '',
        confirmedPassword: '',
      };
    default: return state;
  }
};

// == Export

export default registrationReducer;
