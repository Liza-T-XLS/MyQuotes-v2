// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';

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
