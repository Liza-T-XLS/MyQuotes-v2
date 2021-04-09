// == Imports

import { connect } from 'react-redux';

import Logout from '../../components/Logout';

import { logOut } from '../../actions/authentication';

const mapStateToProps = (state) => ({
  logoutLoader: state.authentication.logoutLoader,
  isLogged: state.authentication.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(logOut());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout);
