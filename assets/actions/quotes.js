// ==  Action types

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const SAVE_QUOTES = 'SAVE_QUOTES';
export const CHANGE_ADD_QUOTE_FORM_STATUS = 'CHANGE_ADD_QUOTE_FORM_STATUS';
export const SAVE_HEADER_HEIGHT = 'SAVE_HEADER_HEIGHT';
export const SAVE_FORM_HEIGHT = 'SAVE_FORM_HEIGHT';

// == Action creators

export const loadQuotes = () => ({
  type: LOAD_QUOTES,
});

export const saveQuotes = (quotes) => ({
  type: SAVE_QUOTES,
  quotes,
});

export const changeAddQuoteFormStatus = () => ({
  type: CHANGE_ADD_QUOTE_FORM_STATUS,
});

export const saveHeaderHeight = (height) => ({
  type: SAVE_HEADER_HEIGHT,
  height,
});

export const saveFormHeight = (height) => ({
  type: SAVE_FORM_HEIGHT,
  height,
});
