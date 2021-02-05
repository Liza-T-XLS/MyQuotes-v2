// == Imports

import { connect } from 'react-redux';

import Form from '../../../components/Quotes/Form';
import {
  changeQuoteFormField,
  saveTag,
  deleteTag,
  addQuote,
  editQuote,
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
});

const mapDispatchToProps = (dispatch) => ({
  changeQuoteFormField: (newValue, fieldName) => {
    dispatch(changeQuoteFormField(newValue, fieldName));
  },
  saveTag: (tagName) => {
    dispatch(saveTag(tagName));
  },
  deleteTag: (tagName) => {
    dispatch(deleteTag(tagName));
  },
  addQuote: () => {
    dispatch(addQuote());
  },
  editQuote: () => {
    dispatch(editQuote());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
