// == Imports

import {
  SET_USER_DATA,
  CHANGE_USER_DATA_FIELD,
  CHECK_EDIT_ERRORS,
  CLEAR_USER_DATA_CHANGES,
  SET_SETTINGS_LOADER,
  SET_EDIT_STATUS,
  SET_SETTINGS_FLASH,
} from '../actions/settings';

import { validEmailRegex, invalidPasswordRegex } from '../utils/regex';

// == Initial state

const initialState = {
  pseudonym: '',
  email: '',
  password: '',
  confirmedPassword: '',
  currentPassword: '',
  pseudonymEditStatus: false,
  emailEditStatus: false,
  passwordEditStatus: false,
  formErrors: {
    pseudonym: '',
    email: '',
    password: '',
    confirmedPassword: '',
    currentPassword: '',
  },
  loader: false,
  flash: false,
};

const settingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        pseudonym: action.pseudonym,
        email: action.email,
      };
    case CHANGE_USER_DATA_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    case CHECK_EDIT_ERRORS: {
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
          if (invalidPasswordRegex.test(state.password)) {
            passwordMsg = 'Your password must be at least 8 characters long, contain at least a number, an upper and a lower case letter and a special character.';
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
        case 'currentPassword': {
          let currentPasswordMsg = '';
          if (state.currentPassword.length < 1) {
            currentPasswordMsg = 'This value cannot be blank.';
          }
          const newFormErrors = {
            ...state.formErrors,
            currentPassword: currentPasswordMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        default: return state;
      }
    }
    case SET_EDIT_STATUS: {
      const target = `${action.fieldName}EditStatus`;
      return {
        ...state,
        [target]: action.boolean,
      };
    }
    case SET_SETTINGS_LOADER:
      return {
        ...state,
        loader: action.boolean,
      };
    case CLEAR_USER_DATA_CHANGES:
      return {
        ...state,
        ...initialState,
      };
    case SET_SETTINGS_FLASH:
      return {
        ...state,
        flash: action.boolean,
      };
    default: return state;
  }
};

// == Export

export default settingsReducer;
