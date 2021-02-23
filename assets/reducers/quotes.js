// == Imports

import slugify from 'slugify';

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
  CHANGE_QUOTE_FORM_LABELS,
  LOAD_QUOTE_DATA,
  SAVE_USER_TAGS,
  SAVE_SELECTED_TAG,
  SAVE_SEARCH_INPUT,
  CLEAR_SEARCH_INPUT,
} from '../actions/quotes';

// == Initial state

const initialState = {
  quotes: [],
  quoteFormTitleLabel: 'Add a quote',
  quoteFormButtonLabel: 'Add',
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
  userTags: [],
  selectedTag: '',
  search: '',
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
        slugify(action.tagName, { lower: true }),
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
        quoteFormTitleLabel: 'Add a quote',
        quoteFormButtonLabel: 'Add',
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
    case CHANGE_QUOTE_FORM_LABELS:
      return {
        ...state,
        quoteFormTitleLabel: action.newTitleLabel,
        quoteFormButtonLabel: action.newButtonLabel,
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
    case SAVE_USER_TAGS:
      return {
        ...state,
        userTags: action.tags,
      };
    case SAVE_SELECTED_TAG:
      return {
        ...state,
        selectedTag: action.tagId,
      };
    case SAVE_SEARCH_INPUT:
      return {
        ...state,
        search: action.searchInput,
      };
    case CLEAR_SEARCH_INPUT:
      return {
        ...state,
        search: '',
      };
    default: return state;
  }
};

// == Export

export default quotesReducer;
