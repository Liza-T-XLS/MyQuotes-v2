/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-eval */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import quotesReducer from '../reducers/quotes';
import { CHANGE_QUOTE_FORM_STATUS, SAVE_HEADER_HEIGHT, SAVE_QUOTES, SAVE_FORM_HEIGHT, CHANGE_QUOTE_FORM_FIELD, SAVE_FORM_TAG, DELETE_FORM_TAG, CHECK_QUOTE_FORM_ERRORS, ADD_SERVER_QUOTE_ERRORS, CLEAR_TAG_INPUT, CLEAR_QUOTE_FORM, SAVE_PAGE_QUANTITY, SAVE_CURRENT_PAGE, CHANGE_QUOTE_FORM_LABELS, LOAD_QUOTE_DATA, SAVE_USER_TAGS, SAVE_SELECTED_TAG, SAVE_SEARCH_INPUT, CLEAR_SEARCH_INPUT, SET_QUOTES_FLASH, SET_QUOTES_FLASH_MSG } from '../actions/quotes';

describe('quotes reducer', () => {
  it('is a function', () => {
    expect(quotesReducer).to.be.a('function');
  });
  it('matches initial state', () => {
    const expectedInitialState = {
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
    expect(quotesReducer()).to.deep.equal(expectedInitialState);
  });
  it('handles SAVE_QUOTES', () => {
    const action = {
      type: SAVE_QUOTES,
      quotes: [
        {
          id: 5,
          text: 'quote number 5',
        },
        {
          id: 7,
          text: 'quote number 7',
        },
      ],
    };
    const expectedState = {
      quotes: [
        {
          id: 5,
          text: 'quote number 5',
        },
        {
          id: 7,
          text: 'quote number 7',
        },
      ],
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
    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CHANGE_QUOTE_FORM_STATUS', () => {
    const action = {
      type: CHANGE_QUOTE_FORM_STATUS,
    };
    const expectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: true,
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
    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_HEADER_HEIGHT', () => {
    const action = {
      type: SAVE_HEADER_HEIGHT,
      height: 369,
    };
    const expectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 369,
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
    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_FORM_HEIGHT', () => {
    const action = {
      type: SAVE_FORM_HEIGHT,
      height: 700,
    };
    const expectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 700,
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
    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CHANGE_QUOTE_FORM_FIELD', () => {
    const action = {
      type: CHANGE_QUOTE_FORM_FIELD,
      fieldName: 'quoteText',
      newValue: 'text of new quote',
    };
    const expectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: 'text of new quote',
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
    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_FORM_TAG', () => {
    const action = {
      type: SAVE_FORM_TAG,
      tagName: 'tEsTiNg one',
    };
    const currentState = {
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
      tagInput: 'tEsTiNg one',
      tags: ['mocha', 'chai'],
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
    const expectedState = {
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
      tags: ['mocha', 'chai', 'testing-one'],
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
    expect(quotesReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles DELETE_FORM_TAG', () => {
    const action = {
      type: DELETE_FORM_TAG,
      tagName: 'testing',
    };
    const currentState = {
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
      tags: ['mocha', 'chai', 'testing'],
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
    const expectedState = {
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
      tags: ['mocha', 'chai'],
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
    expect(quotesReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles CHECK_QUOTE_FORM_ERRORS', () => {
    const currentState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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

    const fields = ['quoteText', 'authorFirstName', 'authorLastName', 'characterName', 'mediumTitle', 'tagInput'];

    const quoteTextExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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
        quoteText: 'The text must be at least 1 character long.',
        authorFirstName: '',
        authorLastName: '',
        characterName: '',
        mediumTitle: '',
        tagInput: '',
        tags: '',
      },
    };
    const authorFirstNameExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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
        authorFirstName: 'The author\'s first name cannot be longer than 255 characters.',
        authorLastName: '',
        characterName: '',
        mediumTitle: '',
        tagInput: '',
        tags: '',
      },
    };
    const authorLastNameExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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
        authorLastName: 'The author\'s last name cannot be longer than 255 characters.',
        characterName: '',
        mediumTitle: '',
        tagInput: '',
        tags: '',
      },
    };
    const characterNameExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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
        characterName: 'The character\'s name cannot be longer than 255 characters.',
        mediumTitle: '',
        tagInput: '',
        tags: '',
      },
    };
    const mediumTitleExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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
        mediumTitle: 'The medium\'s title cannot be longer than 255 characters.',
        tagInput: '',
        tags: '',
      },
    };
    const tagInputExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: '',
      authorFirstName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      authorLastName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      characterName: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      mediumTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
      tagInput: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
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
        tagInput: 'The medium\'s title cannot be longer than 255 characters.',
        tags: '',
      },
    };
    fields.forEach((field) => {
      const expectedState = eval(`${field}ExpectedState`);
      expect(quotesReducer(currentState, {
        type: CHECK_QUOTE_FORM_ERRORS,
        fieldName: field,
      })).to.deep.equal(expectedState);
    });

    const longTextCurrentState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt',
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

    const longTextAction = {
      type: CHECK_QUOTE_FORM_ERRORS,
      fieldName: 'quoteText',
    };

    const longTextExpectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt',
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
        quoteText: 'The text cannot be longer than 1000 characters.',
        authorFirstName: '',
        authorLastName: '',
        characterName: '',
        mediumTitle: '',
        tagInput: '',
        tags: '',
      },
    };

    expect(quotesReducer(longTextCurrentState, longTextAction)).to.deep.equal(longTextExpectedState);
  });
  it('handles ADD_SERVER_QUOTE_ERRORS', () => {
    const action = {
      type: ADD_SERVER_QUOTE_ERRORS,
      errors: [
        {
          field: 'text',
          message: 'text error msg',
        },
        {
          field: 'authorFirstName',
          message: 'authorFirstName error msg',
        },
        {
          field: 'authorLastName',
          message: 'authorLastName error msg',
        },
        {
          field: 'characterName',
          message: 'characterName error msg',
        },
        {
          field: 'mediumTitle',
          message: 'mediumTitle error msg',
        },
        {
          field: 'name',
          message: 'tagName error msg',
        },
      ],
    };

    const expectedState = {
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
        quoteText: 'text error msg',
        authorFirstName: 'authorFirstName error msg',
        authorLastName: 'authorLastName error msg',
        characterName: 'characterName error msg',
        mediumTitle: 'mediumTitle error msg',
        tagInput: '',
        tags: 'tagName error msg',
      },
    };

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_TAG_INPUT', () => {
    const currentState = {
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
      tagInput: 'testing',
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
        tagInput: 'tagInput error msg',
        tags: '',
      },
    };

    const action = {
      type: CLEAR_TAG_INPUT,
    };

    const expectedState = {
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

    expect(quotesReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_QUOTE_FORM', () => {
    const currentState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: 'quote text',
      authorFirstName: 'author\'s first name',
      authorLastName: 'author\'s last name',
      characterName: 'character\'s name',
      mediumTitle: 'medium title',
      tagInput: 'testing',
      tags: ['mocha', 'chai'],
      quoteId: '2',
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

    const action = {
      type: CLEAR_QUOTE_FORM,
    };

    const expectedState = {
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

    expect(quotesReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_PAGE_QUANTITY', () => {
    const action = {
      type: SAVE_PAGE_QUANTITY,
      quantity: 2,
    };

    const expectedState = {
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
      pageQuantity: 2,
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_CURRENT_PAGE', () => {
    const action = {
      type: SAVE_CURRENT_PAGE,
      pageNumber: 5,
    };

    const expectedState = {
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
      currentPage: 5,
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CHANGE_QUOTE_FORM_LABELS', () => {
    const action = {
      type: CHANGE_QUOTE_FORM_LABELS,
      newTitleLabel: 'new title label',
      newButtonLabel: 'new button label',
    };

    const expectedState = {
      quotes: [],
      quoteFormTitleLabel: 'new title label',
      quoteFormButtonLabel: 'new button label',
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles LOAD_QUOTE_DATA', () => {
    const action = {
      type: LOAD_QUOTE_DATA,
      text: 'text',
      authorFirstName: 'author\'s first name',
      authorLastName: 'author\'s last name',
      characterName: 'character\'s name',
      mediumTitle: 'medium title',
      tags: [
        {
          id: 1,
          name: 'tag1',
        },
        {
          id: 2,
          name: 'tag2',
        },
      ],
      id: 5,
    };

    const expectedState = {
      quotes: [],
      quoteFormTitleLabel: 'Add a quote',
      quoteFormButtonLabel: 'Add',
      quoteFormStatus: false,
      quoteFormHeight: 1,
      headerHeight: 0,
      quoteText: 'text',
      authorFirstName: 'author\'s first name',
      authorLastName: 'author\'s last name',
      characterName: 'character\'s name',
      mediumTitle: 'medium title',
      tagInput: '',
      tags: ['tag1', 'tag2'],
      quoteId: 5,
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_USER_TAGS', () => {
    const action = {
      type: SAVE_USER_TAGS,
      tags: [
        {
          id: 1,
          name: 'tag1',
        },
        {
          id: 2,
          name: 'tag2',
        },
      ],
    };

    const expectedState = {
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
      userTags: [
        {
          id: 1,
          name: 'tag1',
        },
        {
          id: 2,
          name: 'tag2',
        },
      ],
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_SELECTED_TAG', () => {
    const action = {
      type: SAVE_SELECTED_TAG,
      tagId: 5,
    };

    const expectedState = {
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
      selectedTag: 5,
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SAVE_SEARCH_INPUT', () => {
    const action = {
      type: SAVE_SEARCH_INPUT,
      searchInput: 'testing',
    };

    const expectedState = {
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
      search: 'testing',
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles CLEAR_SEARCH_INPUT', () => {
    const currentState = {
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
      search: 'testing',
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
    const action = {
      type: CLEAR_SEARCH_INPUT,
    };

    const expectedState = {
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

    expect(quotesReducer(currentState, action)).to.deep.equal(expectedState);
  });
  it('handles SET_QUOTES_FLASH', () => {
    const action = {
      type: SET_QUOTES_FLASH,
      boolean: true,
    };

    const expectedState = {
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
      flash: true,
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
  it('handles SET_QUOTES_FLASH_MSG', () => {
    const action = {
      type: SET_QUOTES_FLASH_MSG,
      msg: 'This is a flash message',
    };

    const expectedState = {
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
      flashMsg: 'This is a flash message',
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

    expect(quotesReducer(undefined, action)).to.deep.equal(expectedState);
  });
});
