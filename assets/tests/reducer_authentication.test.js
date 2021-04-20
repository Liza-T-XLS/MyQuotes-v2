import { describe, it } from 'mocha';
import { expect } from 'chai';
import authenticationReducer from '../reducers/authentication';
import {
  CHANGE_LOGIN_FIELD,
  CLEAR_LOG_IN_FORM,
  SET_IS_LOGGED,
  SET_LOGIN_LOADER,
  SET_LOGOUT_LOADER,
  SHOW_SERVER_ERROR,
} from '../actions/authentication';

describe('authentication reducer', () => {
  it('is a function', () => {
    expect(authenticationReducer).to.be.a('function');
  });
  it('matches initial state', () => {
    const expectedInitialState = {
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    };
    expect(authenticationReducer()).to.deep.equal(expectedInitialState);
  });
  it('handles CHANGE_LOGIN_FIELD', () => {
    const action = {
      type: CHANGE_LOGIN_FIELD,
      fieldName: 'password',
      newValue: 'bestmdp',
    };
    const expectedState = {
      email: '',
      password: 'bestmdp',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    };
    expect(authenticationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SHOW_SERVER_ERROR', () => {
    const action = {
      type: SHOW_SERVER_ERROR,
      errorMsg: 'wrong credentials',
    };
    const expectedState = {
      email: '',
      password: '',
      formErrors: {
        error: 'wrong credentials',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    };
    expect(authenticationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_LOG_IN_FORM', () => {
    const action = {
      type: CLEAR_LOG_IN_FORM,
    };
    const currentState = {
      email: 'blabla@gmail.com',
      password: 'bestmdp',
      formErrors: {
        error: 'wrong credentials',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    };
    const expectedState = {
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    };
    expect(authenticationReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles SET_LOGIN_LOADER', () => {
    const action = {
      type: SET_LOGIN_LOADER,
      boolean: true,
    };
    const expectedState = {
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: true,
      isLogged: false,
      logoutLoader: true,
    };
    expect(authenticationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SET_IS_LOGGED', () => {
    const action = {
      type: SET_IS_LOGGED,
      boolean: true,
    };
    const expectedState = {
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: true,
      logoutLoader: true,
    };
    expect(authenticationReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SET_LOGOUT_LOADER', () => {
    const action = {
      type: SET_LOGOUT_LOADER,
      boolean: false,
    };
    const expectedState = {
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: false,
    };
    expect(authenticationReducer(undefined, action)).to.deep.equal(expectedState);
  });
});
