// ==  Action types

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const SAVE_QUOTES = 'SAVE_QUOTES';
export const CHANGE_QUOTE_FORM_STATUS = 'CHANGE_QUOTE_FORM_STATUS';
export const SAVE_HEADER_HEIGHT = 'SAVE_HEADER_HEIGHT';
export const SAVE_FORM_HEIGHT = 'SAVE_FORM_HEIGHT';
export const CHANGE_QUOTE_FORM_FIELD = 'CHANGE_QUOTE_FORM_FIELD';
export const SAVE_FORM_TAG = 'SAVE_FORM_TAG';
export const DELETE_FORM_TAG = 'DELETE_FORM_TAG';
export const ADD_QUOTE = 'ADD_QUOTE';
export const CHECK_QUOTE_FORM_ERRORS = 'CHECK_QUOTE_FORM_ERRORS';
export const ADD_SERVER_QUOTE_ERRORS = 'ADD_SERVER_QUOTE_ERRORS';
export const CLEAR_TAG_INPUT = 'CLEAR_TAG_INPUT';
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
export const CLEAR_SEARCH_INPUT = 'CLEAR_SEARCH_INPUT';
export const SET_QUOTES_FLASH = 'SET_QUOTES_FLASH';
export const SET_QUOTES_FLASH_MSG = 'SET_QUOTES_FLASH_MSG';

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

export const saveFormTag = (tagName) => ({
  type: SAVE_FORM_TAG,
  tagName,
});

export const deleteFormTag = (tagName) => ({
  type: DELETE_FORM_TAG,
  tagName,
});

export const addQuote = () => ({
  type: ADD_QUOTE,
});

export const checkQuoteFormErrors = (fieldName) => ({
  type: CHECK_QUOTE_FORM_ERRORS,
  fieldName,
});

export const addServerQuoteErrors = (errors) => ({
  type: ADD_SERVER_QUOTE_ERRORS,
  errors,
});

export const clearTagInput = () => ({
  type: CLEAR_TAG_INPUT,
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

export const clearSearchInput = () => ({
  type: CLEAR_SEARCH_INPUT,
});

export const setQuotesFlash = (boolean) => ({
  type: SET_QUOTES_FLASH,
  boolean,
});

export const setQuotesFlashMsg = (msg) => ({
  type: SET_QUOTES_FLASH_MSG,
  msg,
});
