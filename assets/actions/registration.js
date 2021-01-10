// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_ERRORS = 'CHECK_ERRORS';
export const SIGN_UP = 'SIGN_UP';

// == Action creators

export const changeField = (newValue, fieldName) => ({
  type: CHANGE_FIELD,
  newValue,
  fieldName,
});

export const checkErrors = (fieldName) => ({
  type: CHECK_ERRORS,
  fieldName,
});

export const signUp = () => ({
  type: SIGN_UP,
});
