// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SHOW_SERVER_ERROR = 'SHOW_SERVER_ERROR';
export const CLEAR_LOG_IN_FORM = 'CLEAR_LOG_IN_FORM';

// == Action creators

export const changeField = (newValue, fieldName) => ({
  type: CHANGE_FIELD,
  newValue,
  fieldName,
});

export const logIn = (email, password) => ({
  type: LOG_IN,
  email,
  password,
});

export const showServerError = () => ({
  type: SHOW_SERVER_ERROR,
});

export const clearLogInForm = () => ({
  type: CLEAR_LOG_IN_FORM,
});
