// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_ERRORS = 'CHECK_ERRORS';

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
