// == Imports

import slugify from 'slugify';

import {
  SAVE_QUOTES,
  CHANGE_QUOTE_FORM_STATUS,
  SAVE_HEADER_HEIGHT,
  SAVE_FORM_HEIGHT,
  CHANGE_QUOTE_FORM_FIELD,
  SAVE_FORM_TAG,
  DELETE_FORM_TAG,
  CHECK_QUOTE_FORM_ERRORS,
  ADD_SERVER_QUOTE_ERRORS,
  CLEAR_TAG_INPUT,
  CLEAR_QUOTE_FORM,
  SAVE_PAGE_QUANTITY,
  SAVE_CURRENT_PAGE,
  CHANGE_QUOTE_FORM_LABELS,
  LOAD_QUOTE_DATA,
  SAVE_USER_TAGS,
  SAVE_SELECTED_TAG,
  SAVE_SEARCH_INPUT,
  CLEAR_SEARCH_INPUT,
  SET_QUOTES_FLASH,
  SET_QUOTES_FLASH_MSG,
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
  flash: false,
  flashMsg: '',
  formErrors: {
    quoteText: '',
    authorFirstName: '',
    authorLastName: '',
    characterName: '',
    mediumTitle: '',
    tagInput: '',
    tags: '',
  },
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
    case SAVE_FORM_TAG: {
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
    case DELETE_FORM_TAG: {
      const newTagsArray = [...state.tags.filter((tag) => tag !== action.tagName)];
      return {
        ...state,
        tags: newTagsArray,
      };
    }
    case CHECK_QUOTE_FORM_ERRORS:
      switch (action.fieldName) {
        case 'quoteText': {
          let quoteTextMsg = '';
          if (state.quoteText.length < 1) {
            quoteTextMsg = 'The text must be at least 1 character long.';
          }
          if (state.quoteText.length > 1200) {
            quoteTextMsg = 'The text cannot be longer than 1200 characters.';
          }
          const newFormErrors = {
            ...state.formErrors,
            quoteText: quoteTextMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'authorFirstName': {
          let authorFirstNameMsg = '';
          if (state.authorFirstName.length > 255) {
            authorFirstNameMsg = 'The author\'s first name cannot be longer than 255 characters.';
          }
          const newFormErrors = {
            ...state.formErrors,
            authorFirstName: authorFirstNameMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'authorLastName': {
          let authorLastNameMsg = '';
          if (state.authorLastName.length > 255) {
            authorLastNameMsg = 'The author\'s last name cannot be longer than 255 characters.';
          }
          const newFormErrors = {
            ...state.formErrors,
            authorLastName: authorLastNameMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'characterName': {
          let characterNameMsg = '';
          if (state.characterName.length > 255) {
            characterNameMsg = 'The character\'s name cannot be longer than 255 characters.';
          }
          const newFormErrors = {
            ...state.formErrors,
            characterName: characterNameMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'mediumTitle': {
          let mediumTitleMsg = '';
          if (state.mediumTitle.length > 255) {
            mediumTitleMsg = 'The medium\'s title cannot be longer than 255 characters.';
          }
          const newFormErrors = {
            ...state.formErrors,
            mediumTitle: mediumTitleMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        case 'tagInput': {
          let tagInputMsg = '';
          if (state.tagInput.length > 255) {
            tagInputMsg = 'The medium\'s title cannot be longer than 255 characters.';
          }
          const newFormErrors = {
            ...state.formErrors,
            tagInput: tagInputMsg,
          };
          return {
            ...state,
            formErrors: newFormErrors,
          };
        }
        default: return state;
      }
    case ADD_SERVER_QUOTE_ERRORS: {
      let newFormErrors = {
        ...state.formErrors,
      };
      action.errors.map((error) => {
        if (error.field === 'text') {
          newFormErrors = {
            ...newFormErrors,
            quoteText: error.message,
          };
        }
        if (error.field === 'authorFirstName') {
          newFormErrors = {
            ...newFormErrors,
            authorFirstName: error.message,
          };
        }
        if (error.field === 'authorLastName') {
          newFormErrors = {
            ...newFormErrors,
            authorLastName: error.message,
          };
        }
        if (error.field === 'characterName') {
          newFormErrors = {
            ...newFormErrors,
            characterName: error.message,
          };
        }
        if (error.field === 'mediumTitle') {
          newFormErrors = {
            ...newFormErrors,
            mediumTitle: error.message,
          };
        }
        if (error.field === 'name') {
          newFormErrors = {
            ...newFormErrors,
            tags: error.message,
          };
        }
        return newFormErrors;
      });
      return {
        ...state,
        formErrors: newFormErrors,
      };
    }
    case CLEAR_TAG_INPUT: {
      const newFormErrors = {
        ...state.formErrors,
        tagInput: '',
      };
      return {
        ...state,
        tagInput: '',
        formErrors: newFormErrors,
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
    case SET_QUOTES_FLASH:
      return {
        ...state,
        flash: action.boolean,
      };
    case SET_QUOTES_FLASH_MSG:
      return {
        ...state,
        flashMsg: action.msg,
      };
    default: return state;
  }
};

// == Export

export default quotesReducer;
