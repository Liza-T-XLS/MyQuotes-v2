// == Imports

import { connect } from 'react-redux';

import Quotes from '../../components/Quotes';
import {
  loadQuotes,
  changeQuoteFormStatus,
  saveFormHeight,
  changeQuoteFormField,
  addQuote,
  saveCurrentPage,
  clearQuoteForm,
} from '../../actions/quotes';
import { checkIsLogged } from '../../actions/authentication';

const mapStateToProps = (state) => ({
  quotes: state.quotes.quotes,
  quoteFormStatus: state.quotes.quoteFormStatus,
  quoteFormHeight: state.quotes.quoteFormHeight,
  headerHeight: state.quotes.headerHeight,
  quoteText: state.quotes.quoteText,
  authorFirstName: state.quotes.authorFirstName,
  authorLastName: state.quotes.authorLastName,
  characterName: state.quotes.characterName,
  mediumTitle: state.quotes.mediumTitle,
  tagInput: state.quotes.tagInput,
  tags: state.quotes.tags,
  quoteId: state.quotes.quoteId,
  pageQuantity: state.quotes.pageQuantity,
  currentPage: state.quotes.currentPage,
  flash: state.quotes.flash,
  flashMsg: state.quotes.flashMsg,
  isLogged: state.authentication.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuotes: () => {
    dispatch(loadQuotes());
  },
  changeQuoteFormStatus: () => {
    dispatch(changeQuoteFormStatus());
  },
  saveFormHeight: (height) => {
    dispatch(saveFormHeight(height));
  },
  changeQuoteFormField: (newValue, fieldName) => {
    dispatch(changeQuoteFormField(newValue, fieldName));
  },
  addQuote: () => {
    dispatch(addQuote());
  },
  saveCurrentPage: (pageNumber) => {
    dispatch(saveCurrentPage(pageNumber));
  },
  clearQuoteForm: () => {
    dispatch(clearQuoteForm());
  },
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(Quotes);
