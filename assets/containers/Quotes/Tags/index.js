// == Imports

import { connect } from 'react-redux';

import Tags from '../../../components/Quotes/Tags';
import {
  loadTags,
} from '../../../actions/quotes';

const mapStateToProps = (state) => ({
  userTags: state.quotes.userTags,
});

const mapDispatchToProps = (dispatch) => ({
  loadTags: () => {
    dispatch(loadTags());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
