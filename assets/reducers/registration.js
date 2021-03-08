// == Imports

import {
  CHANGE_FIELD,
  CHECK_ERRORS,
  SET_LOADER,
  CONFIRM_SIGN_UP,
  CLEAR_SIGN_UP_FORM,
  ADD_SERVER_ERRORS,
  SET_ACTIVATION_LOADER,
  CONFIRM_ACTIVATION,
  CLEAR_ACTIVATION,
} from '../actions/registration';

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
  activationLoader: true,
  activationComplete: false,
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
            confirmedPasswordMsg = 'The passwords you entered do not match.';
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
    case ADD_SERVER_ERRORS: {
      let newFormErrors = {
        ...state.formErrors,
      };
      action.errors.map((error) => {
        if (error.field === 'pseudonym') {
          newFormErrors = {
            ...newFormErrors,
            pseudonym: error.message,
          };
        }
        if (error.field === 'email') {
          newFormErrors = {
            ...newFormErrors,
            email: error.message,
          };
        }
        if (error.field === 'password') {
          newFormErrors = {
            ...newFormErrors,
            password: error.message,
          };
        }
        return newFormErrors;
      });
      return {
        ...state,
        formErrors: newFormErrors,
      };
    }
    case CLEAR_SIGN_UP_FORM:
      return {
        ...state,
        ...initialState,
      };
    case SET_ACTIVATION_LOADER:
      return {
        ...state,
        activationLoader: false,
      };
    case CONFIRM_ACTIVATION:
      return {
        ...state,
        activationComplete: action.boolean,
      };
    case CLEAR_ACTIVATION:
      return {
        ...state,
        activationLoader: true,
        activationComplete: false,
      };
    default: return state;
  }
};

// == Export

export default registrationReducer;
