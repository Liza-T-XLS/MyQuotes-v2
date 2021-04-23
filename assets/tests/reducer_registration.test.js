/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import registrationReducer from '../reducers/registration';
import {
  CHANGE_FIELD,
  CHECK_ERRORS,
  SET_LOADER,
  CONFIRM_SIGN_UP,
  ADD_SERVER_ERRORS,
  CLEAR_SIGN_UP_FORM,
  SET_ACTIVATION_LOADER,
  CONFIRM_ACTIVATION,
  CLEAR_ACTIVATION,
} from '../actions/registration';

describe('registration reducer', () => {
  it('is a function', () => {
    expect(registrationReducer).to.be.a('function');
  });
  it('matches initial state', () => {
    const expectedInitialState = {
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
    expect(registrationReducer()).to.deep.equal(expectedInitialState);
  });
  it('handles CHANGE_FIELD', () => {
    const action = {
      type: CHANGE_FIELD,
      fieldName: 'pseudonym',
      newValue: 'Blabla',
    };
    const expectedState = {
      pseudonym: 'Blabla',
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
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CHECK_ERRORS', () => {
    const currentState = {
      pseudonym: 'Blabla',
      email: 'bla.gmail.com',
      password: 'bestmdp',
      confirmedPassword: 'bestmdp',
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

    const fields = ['pseudonym', 'email', 'password', 'confirmedPassword'];

    const pseudonymExpectedState = {
      pseudonym: 'Blabla',
      email: 'bla.gmail.com',
      password: 'bestmdp',
      confirmedPassword: 'bestmdp',
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

    const emailExpectedState = {
      pseudonym: 'Blabla',
      email: 'bla.gmail.com',
      password: 'bestmdp',
      confirmedPassword: 'bestmdp',
      formErrors: {
        pseudonym: '',
        email: 'The email you entered is not valid.',
        password: '',
        confirmedPassword: '',
      },
      loader: false,
      registrationComplete: false,
      activationLoader: true,
      activationComplete: false,
    };

    const passwordExpectedState = {
      pseudonym: 'Blabla',
      email: 'bla.gmail.com',
      password: 'bestmdp',
      confirmedPassword: 'bestmdp',
      formErrors: {
        pseudonym: '',
        email: '',
        password: 'Your password must be at least 8 characters long, contain at least a number, an upper and a lower case letter and a special character.',
        confirmedPassword: '',
      },
      loader: false,
      registrationComplete: false,
      activationLoader: true,
      activationComplete: false,
    };

    const confirmedPasswordExpectedState = {
      pseudonym: 'Blabla',
      email: 'bla.gmail.com',
      password: 'bestmdp',
      confirmedPassword: 'bestmdp',
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

    fields.forEach((field) => {
      const expectedState = eval(`${field}ExpectedState`);
      expect(registrationReducer(currentState, {
        type: CHECK_ERRORS,
        fieldName: field,
      })).to.deep.equal(expectedState);
    });
  });
  it('handles SET_LOADER', () => {
    const action = {
      type: SET_LOADER,
      boolean: true,
    };
    const expectedState = {
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
      loader: true,
      registrationComplete: false,
      activationLoader: true,
      activationComplete: false,
    };
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CONFIRM_SIGN_UP', () => {
    const action = {
      type: CONFIRM_SIGN_UP,
      boolean: true,
    };
    const expectedState = {
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
      registrationComplete: true,
      activationLoader: true,
      activationComplete: false,
    };
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles ADD_SERVER_ERRORS', () => {
    const action = {
      type: ADD_SERVER_ERRORS,
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
      formErrors: {
        pseudonym: 'Pseudonym is already taken.',
        email: 'Email is not valid.',
        password: 'Password is too short.',
        confirmedPassword: '',
      },
      loader: false,
      registrationComplete: false,
      activationLoader: true,
      activationComplete: false,
    };
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_SIGN_UP_FORM', () => {
    const action = {
      type: CLEAR_SIGN_UP_FORM,
    };
    const expectedState = {
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
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SET_ACTIVATION_LOADER', () => {
    const action = {
      type: SET_ACTIVATION_LOADER,
    };
    const expectedState = {
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
      activationLoader: false,
      activationComplete: false,
    };
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CONFIRM_ACTIVATION', () => {
    const action = {
      type: CONFIRM_ACTIVATION,
      boolean: true,
    };
    const expectedState = {
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
      activationComplete: true,
    };
    expect(registrationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_ACTIVATION', () => {
    const action = {
      type: CLEAR_ACTIVATION,
    };
    const currentState = {
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
      activationLoader: false,
      activationComplete: true,
    };
    const expectedState = {
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
    expect(registrationReducer(currentState, action)).to.deep.equal(expectedState);
  });
});
