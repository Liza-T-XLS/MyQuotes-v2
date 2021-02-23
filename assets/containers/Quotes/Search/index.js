// == Imports

import { connect } from 'react-redux';

import Search from '../../../components/Quotes/Search';
import {
  saveSearchInput,
  loadQuotes,
} from '../../../actions/quotes';

const mapStateToProps = (state) => ({
  searchInput: state.quotes.search,
});

const mapDispatchToProps = (dispatch) => ({
  saveSearchInput: (searchInput) => {
    dispatch(saveSearchInput(searchInput));
  },
  loadQuotes: () => {
    dispatch(loadQuotes());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
