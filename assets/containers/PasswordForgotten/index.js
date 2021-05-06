// == Imports

import { connect } from 'react-redux';

import PasswordForgotten from '../../components/PasswordForgotten';
import {
  changePasswordForgottenField,
  checkPasswordForgottenFormErrors,
  setPasswordForgottenLoader,
  requestToken,
  checkToken,
  resetPassword,
} from '../../actions/passwordForgotten';

const mapStateToProps = (state) => ({
  email: state.passwordForgotten.email,
  formErrors: state.passwordForgotten.formErrors,
  passwordForgottenLoader: state.passwordForgotten.passwordForgottenLoader,
  tokenIsSent: state.passwordForgotten.tokenIsSent,
  resetAuthorization: state.passwordForgotten.resetAuthorization,
  newPassword: state.passwordForgotten.newPassword,
  confirmedNewPassword: state.passwordForgotten.confirmedNewPassword,
  finalStep: state.passwordForgotten.finalStep,
  passwordChanged: state.passwordForgotten.passwordChanged,
});

const mapDispatchToProps = (dispatch) => ({
  changePasswordForgottenField: (newValue, fieldName) => {
    dispatch(changePasswordForgottenField(newValue, fieldName));
  },
  checkPasswordForgottenFormErrors: (fieldName) => {
    dispatch(checkPasswordForgottenFormErrors(fieldName));
  },
  setPasswordForgottenLoader: (boolean) => {
    dispatch(setPasswordForgottenLoader(boolean));
  },
  requestToken: () => {
    dispatch(requestToken());
  },
  checkToken: () => {
    dispatch(checkToken());
  },
  resetPassword: () => {
    dispatch(resetPassword());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordForgotten);
