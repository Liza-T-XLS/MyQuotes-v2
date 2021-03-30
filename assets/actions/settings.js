// ==  Action types

export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';
export const CHANGE_USER_DATA_FIELD = 'CHANGE_USER_DATA_FIELD';
export const CHECK_EDIT_ERRORS = 'CHECK_EDIT_ERRORS';
export const SET_EDIT_STATUS = 'SET_EDIT_STATUS';
export const SET_DISPLAY_EDIT_PASSWORD = 'SET_DISPLAY_EDIT_PASSWORD';
export const SET_SETTINGS_LOADER = 'SET_SETTINGS_LOADER';
export const SUBMIT_CHANGES = 'SUBMIT_CHANGES';
export const CLEAR_USER_DATA_CHANGES = 'CLEAR_USER_DATA_CHANGES';

// == Action creators

export const loadUserData = () => ({
  type: LOAD_USER_DATA,
});

export const setUserData = (pseudonym, email) => ({
  type: SET_USER_DATA,
  pseudonym,
  email,
});

export const changeUserDataField = (newValue, fieldName) => ({
  type: CHANGE_USER_DATA_FIELD,
  newValue,
  fieldName,
});

export const checkEditErrors = (fieldName) => ({
  type: CHECK_EDIT_ERRORS,
  fieldName,
});

export const setEditStatus = (fieldName, boolean) => ({
  type: SET_EDIT_STATUS,
  fieldName,
  boolean,
});

export const setDisplayEditPassword = (boolean) => ({
  type: SET_DISPLAY_EDIT_PASSWORD,
  boolean,
});

export const setSettingsLoader = (boolean) => ({
  type: SET_SETTINGS_LOADER,
  boolean,
});

export const submitChanges = () => ({
  type: SUBMIT_CHANGES,
});

export const clearUserDataChanges = () => ({
  type: CLEAR_USER_DATA_CHANGES,
});
