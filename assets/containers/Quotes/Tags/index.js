// == Imports

import { connect } from 'react-redux';

import Tags from '../../../components/Quotes/Tags';
import {
  loadTags,
  saveSelectedTag,
  loadQuotes,
  saveCurrentPage,
} from '../../../actions/quotes';

const mapStateToProps = (state) => ({
  userTags: state.quotes.userTags,
  selectedTag: state.quotes.selectedTag,
});

const mapDispatchToProps = (dispatch) => ({
  loadTags: () => {
    dispatch(loadTags());
  },
  saveSelectedTag: (tagId) => {
    dispatch(saveSelectedTag(tagId));
  },
  loadQuotes: () => {
    dispatch(loadQuotes());
  },
  saveCurrentPage: (pageNumber) => {
    dispatch(saveCurrentPage(pageNumber));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
