// == Imports

import { connect } from 'react-redux';

import Activation from '../../components/Activation';
import {
  activateUser,
  clearActivation,
} from '../../actions/registration';

const mapStateToProps = (state) => ({
  activationLoader: state.registration.activationLoader,
  activationComplete: state.registration.activationComplete,
});

const mapDispatchToProps = (dispatch) => ({
  activateUser: () => {
    dispatch(activateUser());
  },
  clearActivation: () => {
    dispatch(clearActivation());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activation);
