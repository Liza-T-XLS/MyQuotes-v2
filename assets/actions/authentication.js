// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const ADD_SERVER_ERROR = 'ADD_SERVER_ERROR';

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

export const addServerError = (error) => ({
  type: ADD_SERVER_ERROR,
  error,
});
