// == Imports

import { connect } from 'react-redux';

import App from '../../components/App';
import { checkIsLogged } from '../../actions/authentication';

const mapStateToProps = (state) => ({
  isLogged: state.authentication.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
