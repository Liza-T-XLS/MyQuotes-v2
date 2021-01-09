// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';

// == Action creators

export const changeField = (newValue, fieldName) => ({
  type: CHANGE_FIELD,
  newValue,
  fieldName,
});
