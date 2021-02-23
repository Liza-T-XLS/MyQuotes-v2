// ==  Action types

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const SAVE_QUOTES = 'SAVE_QUOTES';
export const CHANGE_QUOTE_FORM_STATUS = 'CHANGE_QUOTE_FORM_STATUS';
export const SAVE_HEADER_HEIGHT = 'SAVE_HEADER_HEIGHT';
export const SAVE_FORM_HEIGHT = 'SAVE_FORM_HEIGHT';
export const CHANGE_QUOTE_FORM_FIELD = 'CHANGE_QUOTE_FORM_FIELD';
export const SAVE_TAG = 'SAVE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const ADD_QUOTE = 'ADD_QUOTE';
export const CLEAR_QUOTE_FORM = 'CLEAR_QUOTE_FORM';
export const SAVE_PAGE_QUANTITY = 'SAVE_PAGE_QUANTITY';
export const SAVE_CURRENT_PAGE = 'SAVE_CURRENT_PAGE';
export const CHANGE_QUOTE_FORM_LABELS = 'CHANGE_QUOTE_FORM_LABELS';
export const LOAD_QUOTE_DATA = 'LOAD_QUOTE_DATA';
export const EDIT_QUOTE = 'EDIT_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const LOAD_TAGS = 'LOAD_TAGS';
export const SAVE_USER_TAGS = 'SAVE_USER_TAGS';
export const SAVE_SELECTED_TAG = 'SAVE_SELECTED_TAG';
export const SAVE_SEARCH_INPUT = 'SAVE_SEARCH_INPUT';

// == Action creators

export const loadQuotes = () => ({
  type: LOAD_QUOTES,
});

export const saveQuotes = (quotes) => ({
  type: SAVE_QUOTES,
  quotes,
});

export const changeQuoteFormStatus = () => ({
  type: CHANGE_QUOTE_FORM_STATUS,
});

export const saveHeaderHeight = (height) => ({
  type: SAVE_HEADER_HEIGHT,
  height,
});

export const saveFormHeight = (height) => ({
  type: SAVE_FORM_HEIGHT,
  height,
});

export const changeQuoteFormField = (newValue, fieldName) => ({
  type: CHANGE_QUOTE_FORM_FIELD,
  newValue,
  fieldName,
});

export const saveTag = (tagName) => ({
  type: SAVE_TAG,
  tagName,
});

export const deleteTag = (tagName) => ({
  type: DELETE_TAG,
  tagName,
});

export const addQuote = () => ({
  type: ADD_QUOTE,
});

export const clearQuoteForm = () => ({
  type: CLEAR_QUOTE_FORM,
});

export const savePageQuantity = (quantity) => ({
  type: SAVE_PAGE_QUANTITY,
  quantity,
});

export const saveCurrentPage = (pageNumber) => ({
  type: SAVE_CURRENT_PAGE,
  pageNumber,
});

export const changeQuoteFormLabels = (newTitleLabel, newButtonLabel) => ({
  type: CHANGE_QUOTE_FORM_LABELS,
  newTitleLabel,
  newButtonLabel,
});

export const loadQuoteData = (
  id,
  text,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  tags,
) => ({
  type: LOAD_QUOTE_DATA,
  id,
  text,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  tags,
});

export const editQuote = () => ({
  type: EDIT_QUOTE,
});

export const deleteQuote = (quoteId) => ({
  type: DELETE_QUOTE,
  quoteId,
});

export const loadTags = () => ({
  type: LOAD_TAGS,
});

export const saveUserTags = (tags) => ({
  type: SAVE_USER_TAGS,
  tags,
});

export const saveSelectedTag = (tagId) => ({
  type: SAVE_SELECTED_TAG,
  tagId,
});

export const saveSearchInput = (searchInput) => ({
  type: SAVE_SEARCH_INPUT,
  searchInput,
});
