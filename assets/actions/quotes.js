// ==  Action types

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const SAVE_QUOTES = 'SAVE_QUOTES';

// == Action creators

export const loadQuotes = () => ({
  type: LOAD_QUOTES,
});

export const saveQuotes = (quotes) => ({
  type: SAVE_QUOTES,
  quotes,
});
