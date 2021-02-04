// == Imports

import {
  SAVE_QUOTES,
  CHANGE_QUOTE_FORM_STATUS,
  SAVE_HEADER_HEIGHT,
  SAVE_FORM_HEIGHT,
  CHANGE_QUOTE_FORM_FIELD,
  SAVE_TAG,
  DELETE_TAG,
  CLEAR_QUOTE_FORM,
  SAVE_PAGE_QUANTITY,
  SAVE_CURRENT_PAGE,
  CHANGE_QUOTE_FORM_LABEL,
  LOAD_QUOTE_DATA,
} from '../actions/quotes';

// == Initial state

const initialState = {
  quotes: [],
  quoteFormLabel: 'Add a quote',
  quoteFormStatus: false,
  quoteFormHeight: 1,
  headerHeight: 0,
  quoteText: '',
  authorFirstName: '',
  authorLastName: '',
  characterName: '',
  mediumTitle: '',
  tagInput: '',
  tags: [],
  quoteId: '',
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
    case CHANGE_QUOTE_FORM_STATUS:
      return {
        ...state,
        quoteFormStatus: !state.quoteFormStatus,
      };
    case SAVE_HEADER_HEIGHT:
      return {
        ...state,
        headerHeight: action.height,
      };
    case SAVE_FORM_HEIGHT:
      return {
        ...state,
        quoteFormHeight: action.height,
      };
    case CHANGE_QUOTE_FORM_FIELD: {
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
    case CLEAR_QUOTE_FORM:
      return {
        ...state,
        quoteText: '',
        authorFirstName: '',
        authorLastName: '',
        characterName: '',
        mediumTitle: '',
        tagInput: '',
        tags: [],
        quoteId: '',
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
    case CHANGE_QUOTE_FORM_LABEL:
      return {
        ...state,
        quoteFormLabel: action.newLabel,
      };
    case LOAD_QUOTE_DATA: {
      const newTagsArray = action.tags.map((tag) => tag.name);
      return {
        ...state,
        quoteText: action.text,
        authorFirstName: action.authorFirstName,
        authorLastName: action.authorLastName,
        characterName: action.characterName,
        mediumTitle: action.mediumTitle,
        tags: newTagsArray,
        quoteId: action.id,
      };
    }
    default: return state;
  }
};

// == Export

export default quotesReducer;
