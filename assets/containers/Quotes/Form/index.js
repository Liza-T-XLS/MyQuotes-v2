// == Imports

import { connect } from 'react-redux';

import Form from '../../../components/Quotes/Form';
import {
  changeAddQuoteFormField,
  addQuote,
} from '../../../actions/quotes';

const mapStateToProps = (state) => ({
  addQuoteFormStatus: state.quotes.addQuoteFormStatus,
  addQuoteFormHeight: state.quotes.addQuoteFormHeight,
  quoteText: state.quotes.quoteText,
  authorFirstName: state.quotes.authorFirstName,
  authorLastName: state.quotes.authorLastName,
  characterName: state.quotes.characterName,
  mediumTitle: state.quotes.mediumTitle,
  tagInput: state.quotes.tagInput,
  tags: state.quotes.tags,
});

const mapDispatchToProps = (dispatch) => ({
  changeAddQuoteFormField: (newValue, fieldName) => {
    dispatch(changeAddQuoteFormField(newValue, fieldName));
  },
  addQuote: () => {
    dispatch(addQuote());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
