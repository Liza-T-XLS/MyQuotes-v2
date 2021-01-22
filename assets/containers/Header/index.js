// == Imports

import { connect } from 'react-redux';
import { saveHeaderHeight } from '../../actions/quotes';

import Header from '../../components/Header';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  saveHeaderHeight: (height) => {
    dispatch(saveHeaderHeight(height));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
