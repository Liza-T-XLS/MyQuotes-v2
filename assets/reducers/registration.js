// == Imports

import { CHANGE_FIELD, CHECK_ERRORS } from '../actions/registration';
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
      let pseudonymMsg = '';
      let emailMsg = '';
      let passwordMsg = '';
      let confirmedPasswordMsg = '';

      if (state.pseudonym.length < 2) {
        pseudonymMsg = 'Your pseudonym must be at least 2-character long.';
      }
      if (!validEmailRegex.test(state.email)) {
        emailMsg = 'The email you entered is not valid.';
      }
      if (state.password.length < 4) {
        passwordMsg = 'Your password must be at least 4-character long.';
      }
      if (state.confirmedPassword !== state.password) {
        confirmedPasswordMsg = 'The passwords you entered do not match.';
      }
      const newFormErrors = {
        ...state.formErrors,
        pseudonym: pseudonymMsg,
        email: emailMsg,
        password: passwordMsg,
        confirmedPassword: confirmedPasswordMsg,
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

export default registrationReducer;
