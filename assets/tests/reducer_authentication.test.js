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
    expect(authenticationReducer(undefined, {
      type: CHANGE_LOGIN_FIELD,
      fieldName: 'password',
      newValue: 'bestmdp',
    })).to.deep.equal({
      email: '',
      password: 'bestmdp',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    });
  });
  it('handles SHOW_SERVER_ERROR', () => {
    expect(authenticationReducer(undefined, {
      type: SHOW_SERVER_ERROR,
      errorMsg: 'wrong credentials',
    })).to.deep.equal({
      email: '',
      password: '',
      formErrors: {
        error: 'wrong credentials',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    });
  });
  it('handles CLEAR_LOG_IN_FORM', () => {
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
    expect(authenticationReducer(currentState, {
      type: CLEAR_LOG_IN_FORM,
    })).to.deep.equal({
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: true,
    });
  });
  it('handles SET_LOGIN_LOADER', () => {
    expect(authenticationReducer(undefined, {
      type: SET_LOGIN_LOADER,
      boolean: true,
    })).to.deep.equal({
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: true,
      isLogged: false,
      logoutLoader: true,
    });
  });
  it('handles SET_IS_LOGGED', () => {
    expect(authenticationReducer(undefined, {
      type: SET_IS_LOGGED,
      boolean: true,
    })).to.deep.equal({
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: true,
      logoutLoader: true,
    });
  });
  it('handles SET_LOGOUT_LOADER', () => {
    expect(authenticationReducer(undefined, {
      type: SET_LOGOUT_LOADER,
      boolean: false,
    })).to.deep.equal({
      email: '',
      password: '',
      formErrors: {
        error: '',
      },
      loginLoader: false,
      isLogged: false,
      logoutLoader: false,
    });
  });
});
