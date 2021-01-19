// == Imports

import { connect } from 'react-redux';

import Quotes from '../../components/Quotes';
import {
  loadQuotes,
} from '../../actions/quotes';

const mapStateToProps = (state) => ({
  quotes: state.quotes.quotes,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuotes: () => {
    dispatch(loadQuotes());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quotes);
