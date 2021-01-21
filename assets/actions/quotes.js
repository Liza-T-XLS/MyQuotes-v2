// ==  Action types

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const SAVE_QUOTES = 'SAVE_QUOTES';
export const CHANGE_ADD_QUOTE_FORM_STATUS = 'CHANGE_ADD_QUOTE_FORM_STATUS';

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
