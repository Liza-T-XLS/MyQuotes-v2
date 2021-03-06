// == Imports

import { connect } from 'react-redux';

import Nav from '../../../components/Header/Nav';
import { setOpen } from '../../../actions/nav';

const mapStateToProps = (state) => ({
  open: state.nav.open,
  isLogged: state.authentication.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  setOpen: (boolean) => {
    dispatch(setOpen(boolean));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
