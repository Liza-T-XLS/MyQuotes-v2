// == Imports

import { connect } from 'react-redux';

import Nav from '../../../components/Header/Nav';
import { logOut } from '../../../actions/authentication';

const mapStateToProps = (state) => ({
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
)(Nav);
