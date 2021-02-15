// == Imports

import { connect } from 'react-redux';

import Tags from '../../../components/Quotes/Tags';
import {
  loadTags,
  saveSelectedTag,
  loadQuotes,
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
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
