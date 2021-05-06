// == Imports

import {
  CHANGE_PASSWORD_FORGOTTEN_FIELD,
  CHECK_PASSWORD_FORGOTTEN_FORM_ERRORS,
  SET_PASSWORD_FORGOTTEN_LOADER,
  ADD_PASSWORD_FORGOTTEN_SERVER_ERRORS,
  SET_TOKEN_IS_SENT,
  SET_USER_ID,
  SET_RESET_AUTHORIZATION,
  SET_FINAL_STEP,
  SET_PASSWORD_CHANGED,
} from '../actions/passwordForgotten';

import { validEmailRegex, invalidPasswordRegex } from '../utils/regex';

// == Initial state

const initialState = {
  email: '',
  formErrors: {
    email: '',
    token: '',
    newPassword: '',
    confirmedNewPassword: '',
  },
  passwordForgottenLoader: false,
  tokenIsSent: false,
  token: '',
  userId: '',
  resetAuthorization: false,
  newPassword: '',
  confirmedNewPassword: '',
  finalStep: false,
  passwordChanged: false,
};

const passwordForgottenReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PASSWORD_FORGOTTEN_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    case CHECK_PASSWORD_FORGOTTEN_FORM_ERRORS: {
      switch (action.fieldName) {
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
        case 'newPassword': {
          let newPasswordMsg = '';
          if (invalidPasswordRegex.test(state.newPassword)) {
            newPasswordMsg = 'Your password must be at least 8 characters long, contain at least a number, an upper and a lower case letter and a special character.';
          }
          const newFormErrors = {
            ...state.formErrors,
            newPassword: newPasswordMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'confirmedNewPassword': {
          let confirmedNewPasswordMsg = '';
          if (state.confirmedNewPassword !== state.newPassword) {
            confirmedNewPasswordMsg = 'The passwords you entered do not match.';
          }
          const newFormErrors = {
            ...state.formErrors,
            confirmedNewPassword: confirmedNewPasswordMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        default: return state;
      }
    }
    case SET_PASSWORD_FORGOTTEN_LOADER: {
      return {
        ...state,
        passwordForgottenLoader: action.boolean,
      };
    }
    case ADD_PASSWORD_FORGOTTEN_SERVER_ERRORS: {
      let newFormErrors = {
        ...state.formErrors,
      };
      if (action.errors.message === 'This email does not match any user.') {
        newFormErrors = {
          ...newFormErrors,
          email: action.errors.message,
        };
      } else if (action.errors.message === 'This user id does not exist.' || action.errors.message === 'Wrong token provided.' || action.errors.message === 'The token has expired.') {
        newFormErrors = {
          ...newFormErrors,
          token: action.errors.message,
        };
      } else {
        newFormErrors = {
          ...newFormErrors,
          newPassword: action.errors.message,
        };
      }
      return {
        ...state,
        formErrors: newFormErrors,
      };
    }
    case SET_TOKEN_IS_SENT:
      return {
        ...state,
        tokenIsSent: action.boolean,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.id,
      };
    case SET_RESET_AUTHORIZATION:
      return {
        ...state,
        resetAuthorization: action.boolean,
      };
    case SET_FINAL_STEP:
      return {
        ...state,
        finalStep: action.boolean,
      };
    case SET_PASSWORD_CHANGED:
      return {
        ...state,
        passwordChanged: action.boolean,
      };
    default: return state;
  }
};

// == Export

export default passwordForgottenReducer;
