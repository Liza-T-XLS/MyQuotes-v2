// == Imports

import { connect } from 'react-redux';

import Quotes from '../../components/Quotes';
import {
  loadQuotes,
  changeAddQuoteFormStatus,
  saveFormHeight,
  changeAddQuoteFormField,
  addQuote,
} from '../../actions/quotes';

const mapStateToProps = (state) => ({
  quotes: state.quotes.quotes,
  addQuoteFormStatus: state.quotes.addQuoteFormStatus,
  addQuoteFormHeight: state.quotes.addQuoteFormHeight,
  headerHeight: state.quotes.headerHeight,
  quoteText: state.quotes.quoteText,
  authorFirstName: state.quotes.authorFirstName,
  authorLastName: state.quotes.authorLastName,
  characterName: state.quotes.characterName,
  mediumTitle: state.quotes.mediumTitle,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuotes: () => {
    dispatch(loadQuotes());
  },
  changeAddQuoteFormStatus: () => {
    dispatch(changeAddQuoteFormStatus());
  },
  saveFormHeight: (height) => {
    dispatch(saveFormHeight(height));
  },
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
)(Quotes);
