// ==  Action types

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_ERRORS = 'CHECK_ERRORS';
export const SIGN_UP = 'SIGN_UP';
export const SET_LOADER = 'SET_LOADER';
export const CONFIRM_SIGN_UP = 'CONFIRM_SIGN_UP';
export const CLEAR_SIGN_UP_FORM = 'CLEAR_SIGN_UP_FORM';
export const ADD_SERVER_ERRORS = 'ADD_SERVER_ERRORS';
export const ACTIVATE_USER = 'ACTIVATE_USER';
export const SET_ACTIVATION_LOADER = 'SET_ACTIVATION_LOADER';
export const CONFIRM_ACTIVATION = 'CONFIRM_ACTIVATION';
export const CLEAR_ACTIVATION = 'CLEAR_ACTIVATION';

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

export const setLoader = (boolean) => ({
  type: SET_LOADER,
  boolean,
});

export const confirmSignUp = (boolean) => ({
  type: CONFIRM_SIGN_UP,
  boolean,
});

export const clearSignUpForm = () => ({
  type: CLEAR_SIGN_UP_FORM,
});

export const addServerErrors = (errors) => ({
  type: ADD_SERVER_ERRORS,
  errors,
});

export const activateUser = () => ({
  type: ACTIVATE_USER,
});

export const setActivationLoader = (boolean) => ({
  type: SET_ACTIVATION_LOADER,
  boolean,
});

export const confirmActivation = (boolean) => ({
  type: CONFIRM_ACTIVATION,
  boolean,
});

export const clearActivation = () => ({
  type: CLEAR_ACTIVATION,
});
