// == Imports

import {
  SAVE_QUOTES,
  CHANGE_ADD_QUOTE_FORM_STATUS,
  SAVE_HEADER_HEIGHT,
  SAVE_FORM_HEIGHT,
  CHANGE_ADD_QUOTE_FORM_FIELD,
  SAVE_TAG,
  DELETE_TAG,
  CLEAR_ADD_QUOTE_FORM,
  SAVE_PAGE_QUANTITY,
  SAVE_CURRENT_PAGE,
} from '../actions/quotes';

// == Initial state

const initialState = {
  quotes: [],
  addQuoteFormStatus: false,
  addQuoteFormHeight: 1,
  headerHeight: 0,
  quoteText: '',
  authorFirstName: '',
  authorLastName: '',
  characterName: '',
  mediumTitle: '',
  tagInput: '',
  tags: [],
  pageQuantity: 0,
  currentPage: 1,
};

// == Reducer

const quotesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
      };
    case CHANGE_ADD_QUOTE_FORM_STATUS:
      return {
        ...state,
        addQuoteFormStatus: !state.addQuoteFormStatus,
      };
    case SAVE_HEADER_HEIGHT:
      return {
        ...state,
        headerHeight: action.height,
      };
    case SAVE_FORM_HEIGHT:
      return {
        ...state,
        addQuoteFormHeight: action.height,
      };
    case CHANGE_ADD_QUOTE_FORM_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    case SAVE_TAG: {
      const newTagsArray = [
        ...state.tags,
        action.tagName,
      ];
      return {
        ...state,
        tagInput: '',
        tags: newTagsArray,
      };
    }
    case DELETE_TAG: {
      const newTagsArray = [...state.tags.filter((tag) => tag !== action.tagName)];
      return {
        ...state,
        tags: newTagsArray,
      };
    }
    case CLEAR_ADD_QUOTE_FORM:
      return {
        ...state,
        quoteText: '',
        authorFirstName: '',
        authorLastName: '',
        characterName: '',
        mediumTitle: '',
        tagInput: '',
        tags: [],
      };
    case SAVE_PAGE_QUANTITY:
      return {
        ...state,
        pageQuantity: action.quantity,
      };
    case SAVE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    default: return state;
  }
};

// == Export

export default quotesReducer;
