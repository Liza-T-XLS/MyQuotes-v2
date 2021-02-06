// == Imports

import { connect } from 'react-redux';

import Dialog from '../../../components/Quotes/Dialog';
import {
  deleteQuote,
} from '../../../actions/quotes';

const mapStateToProps = (state, ownProps) => ({
  quote: ownProps.quote,
});

const mapDispatchToProps = (dispatch) => ({
  deleteQuote: (quoteId) => {
    dispatch(deleteQuote(quoteId));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialog);
