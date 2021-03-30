// == Imports

import { connect } from 'react-redux';

import Settings from '../../components/Settings';
import {
  loadUserData,
  changeUserDataField,
  checkEditErrors,
  setEditStatus,
  setDisplayEditPassword,
  setSettingsLoader,
  submitChanges,
  clearUserDataChanges,
} from '../../actions/settings';

const mapStateToProps = (state) => ({
  pseudonym: state.settings.pseudonym,
  email: state.settings.email,
  password: state.settings.password,
  confirmedPassword: state.settings.confirmedPassword,
  currentPassword: state.settings.currentPassword,
  pseudonymEditStatus: state.settings.pseudonymEditStatus,
  emailEditStatus: state.settings.emailEditStatus,
  passwordEditStatus: state.settings.passwordEditStatus,
  formErrors: state.settings.formErrors,
  loader: state.settings.loader,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserData: () => {
    dispatch(loadUserData());
  },
  changeUserDataField: (newValue, fieldName) => {
    dispatch(changeUserDataField(newValue, fieldName));
  },
  checkEditErrors: (fieldName) => {
    dispatch(checkEditErrors(fieldName));
  },
  setEditStatus: (fieldName, boolean) => {
    dispatch(setEditStatus(fieldName, boolean));
  },
  setDisplayEditPassword: (boolean) => {
    dispatch(setDisplayEditPassword(boolean));
  },
  setSettingsLoader: (boolean) => {
    dispatch(setSettingsLoader(boolean));
  },
  submitChanges: () => {
    dispatch(submitChanges());
  },
  clearUserDataChanges: () => {
    dispatch(clearUserDataChanges());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
