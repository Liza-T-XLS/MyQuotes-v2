// == Imports

import { connect } from 'react-redux';

import Form from '../../../components/Quotes/Form';
import {
  changeQuoteFormField,
  saveFormTag,
  deleteFormTag,
  addQuote,
  editQuote,
  checkQuoteFormErrors,
  clearTagInput,
} from '../../../actions/quotes';

const mapStateToProps = (state) => ({
  quoteFormTitleLabel: state.quotes.quoteFormTitleLabel,
  quoteFormButtonLabel: state.quotes.quoteFormButtonLabel,
  quoteFormStatus: state.quotes.quoteFormStatus,
  quoteFormHeight: state.quotes.quoteFormHeight,
  quoteText: state.quotes.quoteText,
  authorFirstName: state.quotes.authorFirstName,
  authorLastName: state.quotes.authorLastName,
  characterName: state.quotes.characterName,
  mediumTitle: state.quotes.mediumTitle,
  tagInput: state.quotes.tagInput,
  tags: state.quotes.tags,
  quoteId: state.quotes.quoteId,
  formErrors: state.quotes.formErrors,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuoteFormField: (newValue, fieldName) => {
    dispatch(changeQuoteFormField(newValue, fieldName));
  },
  saveFormTag: (tagName) => {
    dispatch(saveFormTag(tagName));
  },
  deleteFormTag: (tagName) => {
    dispatch(deleteFormTag(tagName));
  },
  addQuote: () => {
    dispatch(addQuote());
  },
  editQuote: () => {
    dispatch(editQuote());
  },
  checkQuoteFormErrors: (fieldName) => {
    dispatch(checkQuoteFormErrors(fieldName));
  },
  clearTagInput: () => {
    dispatch(clearTagInput());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
