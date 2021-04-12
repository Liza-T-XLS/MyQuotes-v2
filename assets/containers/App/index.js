// == Imports

import { connect } from 'react-redux';

import App from '../../components/App';
import { checkIsLogged } from '../../actions/authentication';
import { setOpen } from '../../actions/nav';

const mapStateToProps = (state) => ({
  open: state.nav.open,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
  setOpen: (boolean) => {
    dispatch(setOpen(boolean));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
