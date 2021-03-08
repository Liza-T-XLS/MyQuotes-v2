// ==  Action types

export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SHOW_SERVER_ERROR = 'SHOW_SERVER_ERROR';
export const CLEAR_LOG_IN_FORM = 'CLEAR_LOG_IN_FORM';
export const SET_LOGIN_LOADER = 'SET_LOGIN_LOADER';
export const SET_IS_LOGGED = 'SET_IS_LOGGED';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';

// == Action creators

export const changeField = (newValue, fieldName) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  fieldName,
});

export const logIn = (email, password) => ({
  type: LOG_IN,
  email,
  password,
});

export const showServerError = (errorMsg) => ({
  type: SHOW_SERVER_ERROR,
  errorMsg,
});

export const clearLogInForm = () => ({
  type: CLEAR_LOG_IN_FORM,
});

export const setLoginLoader = (boolean) => ({
  type: SET_LOGIN_LOADER,
  boolean,
});

export const setIsLogged = (boolean) => ({
  type: SET_IS_LOGGED,
  boolean,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
