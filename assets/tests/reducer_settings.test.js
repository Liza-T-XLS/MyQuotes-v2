/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import settingsReducer from '../reducers/settings';
import {
  CHANGE_USER_DATA_FIELD,
  SET_USER_DATA,
  CHECK_EDIT_ERRORS,
  ADD_SERVER_EDIT_ERRORS,
  SET_EDIT_STATUS,
  SET_SETTINGS_LOADER,
  CLEAR_USER_DATA_CHANGES,
  SET_SETTINGS_FLASH,
} from '../actions/settings';

describe('settings reducer', () => {
  it('is a function', () => {
    expect(settingsReducer).to.be.a('function');
  });
  it('matches initial state', () => {
    const expectedInitialState = {
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
    expect(settingsReducer()).to.deep.equal(expectedInitialState);
  });
  it('handles SET_USER_DATA', () => {
    const action = {
      type: SET_USER_DATA,
      pseudonym: 'Bla',
      email: 'blabla@gmail.com',
    };
    const expectedState = {
      pseudonym: 'Bla',
      email: 'blabla@gmail.com',
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
    expect(settingsReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CHANGE_USER_DATA_FIELD', () => {
    const action = {
      type: CHANGE_USER_DATA_FIELD,
      fieldName: 'email',
      newValue: 'johndoe@gmail.com',
    };
    const currentState = {
      pseudonym: '',
      email: 'blabla@gmail.com',
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
    const expectedState = {
      pseudonym: '',
      email: 'johndoe@gmail.com',
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
    expect(settingsReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles CHECK_EDIT_ERRORS', () => {
    const currentState = {
      pseudonym: 'B',
      email: 'blabla.gmail.com',
      password: 'blabla',
      confirmedPassword: 'albalb',
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

    const fields = ['pseudonym', 'email', 'password', 'confirmedPassword', 'currentPassword'];

    const pseudonymExpectedState = {
      pseudonym: 'B',
      email: 'blabla.gmail.com',
      password: 'blabla',
      confirmedPassword: 'albalb',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: false,
      passwordEditStatus: false,
      formErrors: {
        pseudonym: 'Your pseudonym must be at least 2 characters long.',
        email: '',
        password: '',
        confirmedPassword: '',
        currentPassword: '',
      },
      loader: false,
      flash: false,
    };

    const emailExpectedState = {
      pseudonym: 'B',
      email: 'blabla.gmail.com',
      password: 'blabla',
      confirmedPassword: 'albalb',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: false,
      passwordEditStatus: false,
      formErrors: {
        pseudonym: '',
        email: 'The email you entered is not valid.',
        password: '',
        confirmedPassword: '',
        currentPassword: '',
      },
      loader: false,
      flash: false,
    };

    const passwordExpectedState = {
      pseudonym: 'B',
      email: 'blabla.gmail.com',
      password: 'blabla',
      confirmedPassword: 'albalb',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: false,
      passwordEditStatus: false,
      formErrors: {
        pseudonym: '',
        email: '',
        password: 'Your password must be at least 8 characters long, contain at least a number, an upper and a lower case letter and a special character.',
        confirmedPassword: '',
        currentPassword: '',
      },
      loader: false,
      flash: false,
    };

    const confirmedPasswordExpectedState = {
      pseudonym: 'B',
      email: 'blabla.gmail.com',
      password: 'blabla',
      confirmedPassword: 'albalb',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: false,
      passwordEditStatus: false,
      formErrors: {
        pseudonym: '',
        email: '',
        password: '',
        confirmedPassword: 'The passwords you entered do not match.',
        currentPassword: '',
      },
      loader: false,
      flash: false,
    };

    const currentPasswordExpectedState = {
      pseudonym: 'B',
      email: 'blabla.gmail.com',
      password: 'blabla',
      confirmedPassword: 'albalb',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: false,
      passwordEditStatus: false,
      formErrors: {
        pseudonym: '',
        email: '',
        password: '',
        confirmedPassword: '',
        currentPassword: 'This value cannot be blank.',
      },
      loader: false,
      flash: false,
    };

    fields.forEach((field) => {
      const expectedState = eval(`${field}ExpectedState`);
      expect(settingsReducer(currentState, {
        type: CHECK_EDIT_ERRORS,
        fieldName: field,
      })).to.deep.equal(expectedState);
    });
  });
  it('handles ADD_SERVER_EDIT_ERRORS', () => {
    const actionInvalidPassword = {
      type: ADD_SERVER_EDIT_ERRORS,
      errors: {
        message: 'Invalid password',
      },
    };
    const invalidPasswordExpectedState = {
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
        currentPassword: 'Invalid password',
      },
      loader: false,
      flash: false,
    };
    expect(settingsReducer(undefined, actionInvalidPassword)).to.deep.equal(invalidPasswordExpectedState);

    const action = {
      type: ADD_SERVER_EDIT_ERRORS,
      errors: [
        {
          field: 'pseudonym',
          message: 'Pseudonym is already taken.',
        },
        {
          field: 'email',
          message: 'Email is not valid.',
        },
        {
          field: 'password',
          message: 'Password is too short.',
        },
      ],
    };
    const expectedState = {
      pseudonym: '',
      email: '',
      password: '',
      confirmedPassword: '',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: false,
      passwordEditStatus: false,
      formErrors: {
        pseudonym: 'Pseudonym is already taken.',
        email: 'Email is not valid.',
        password: 'Password is too short.',
        confirmedPassword: '',
        currentPassword: '',
      },
      loader: false,
      flash: false,
    };
    expect(settingsReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SET_EDIT_STATUS', () => {
    const action = {
      type: SET_EDIT_STATUS,
      fieldName: 'email',
      boolean: true,
    };
    const expectedState = {
      pseudonym: '',
      email: '',
      password: '',
      confirmedPassword: '',
      currentPassword: '',
      pseudonymEditStatus: false,
      emailEditStatus: true,
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
    expect(settingsReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SET_SETTINGS_LOADER', () => {
    const action = {
      type: SET_SETTINGS_LOADER,
      boolean: true,
    };
    const expectedState = {
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
      loader: true,
      flash: false,
    };
    expect(settingsReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_USER_DATA_CHANGES', () => {
    const action = {
      type: CLEAR_USER_DATA_CHANGES,
    };
    const currentState = {
      pseudonym: 'Blabla',
      email: 'blabla@gmail.com',
      password: 'bestmdp',
      confirmedPassword: 'bestmdp',
      currentPassword: 'formerbestmdp',
      pseudonymEditStatus: true,
      emailEditStatus: true,
      passwordEditStatus: true,
      formErrors: {
        pseudonym: 'errorMsg',
        email: 'errorMsg',
        password: 'errorMsg',
        confirmedPassword: 'errorMsg',
        currentPassword: 'errorMsg',
      },
      loader: true,
      flash: true,
    };
    const expectedState = {
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
    expect(settingsReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles SET_SETTINGS_FLASH', () => {
    const action = {
      type: SET_SETTINGS_FLASH,
      boolean: true,
    };
    const expectedState = {
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
      flash: true,
    };
    expect(settingsReducer(undefined, action)).to.deep.equal(expectedState);
  });
});
