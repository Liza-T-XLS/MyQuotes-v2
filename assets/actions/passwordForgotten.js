// ==  Action types

export const CHANGE_PASSWORD_FORGOTTEN_FIELD = 'CHANGE_PASSWORD_FORGOTTEN_FIELD';
export const CHECK_PASSWORD_FORGOTTEN_FORM_ERRORS = 'CHECK_PASSWORD_FORGOTTEN_FORM_ERRORS';
export const SET_PASSWORD_FORGOTTEN_LOADER = 'SET_PASSWORD_FORGOTTEN_LOADER';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const ADD_PASSWORD_FORGOTTEN_SERVER_ERRORS = 'ADD_PASSWORD_FORGOTTEN_SERVER_ERRORS';
export const SET_TOKEN_IS_SENT = 'SET_TOKEN_IS_SENT';
export const SET_USER_ID = 'SET_USER_ID';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const SET_RESET_AUTHORIZATION = 'SET_RESET_AUTHORIZATION';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const SET_PASSWORD_CHANGED = 'SET_PASSWORD_CHANGED';
export const CLEAR_PASSWORD_FORGOTTEN = 'CLEAR_PASSWORD_FORGOTTEN';

// == Action creators

export const changePasswordForgottenField = (newValue, fieldName) => ({
  type: CHANGE_PASSWORD_FORGOTTEN_FIELD,
  newValue,
  fieldName,
});

export const checkPasswordForgottenFormErrors = (fieldName) => ({
  type: CHECK_PASSWORD_FORGOTTEN_FORM_ERRORS,
  fieldName,
});

export const setPasswordForgottenLoader = (boolean) => ({
  type: SET_PASSWORD_FORGOTTEN_LOADER,
  boolean,
});

export const requestToken = () => ({
  type: REQUEST_TOKEN,
});

export const addPasswordForgottenServerErrors = (errors) => ({
  type: ADD_PASSWORD_FORGOTTEN_SERVER_ERRORS,
  errors,
});

export const setTokenIsSent = (boolean) => ({
  type: SET_TOKEN_IS_SENT,
  boolean,
});

export const setUserId = (id) => ({
  type: SET_USER_ID,
  id,
});

export const checkToken = () => ({
  type: CHECK_TOKEN,
});

export const setResetAuthorization = (boolean) => ({
  type: SET_RESET_AUTHORIZATION,
  boolean,
});

export const resetPassword = () => ({
  type: RESET_PASSWORD,
});

export const setPasswordChanged = (boolean) => ({
  type: SET_PASSWORD_CHANGED,
  boolean,
});

export const clearPasswordForgotten = () => ({
  type: CLEAR_PASSWORD_FORGOTTEN,
});
