// == Imports

import { connect } from 'react-redux';

import Quotes from '../../components/Quotes';
import {
  loadQuotes,
  changeAddQuoteFormStatus,
  saveFormHeight,
} from '../../actions/quotes';

const mapStateToProps = (state) => ({
  quotes: state.quotes.quotes,
  addQuoteFormStatus: state.quotes.addQuoteFormStatus,
  addQuoteFormHeight: state.quotes.addQuoteFormHeight,
  headerHeight: state.quotes.headerHeight,
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
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quotes);
