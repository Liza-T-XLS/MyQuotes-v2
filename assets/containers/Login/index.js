// == Imports

import { connect } from 'react-redux';

import Login from '../../components/Login';
import {
  changeField,
  logIn,
  clearLogInForm,
  setLoginLoader,
} from '../../actions/authentication';

const mapStateToProps = (state) => ({
  email: state.authentication.email,
  password: state.authentication.password,
  formErrors: state.authentication.formErrors,
  loader: state.authentication.loader,
  isLogged: state.authentication.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, fieldName) => {
    dispatch(changeField(newValue, fieldName));
  },
  logIn: (email, password) => {
    dispatch(logIn(email, password));
  },
  clearLogInForm: () => {
    dispatch(clearLogInForm());
  },
  setLoginLoader: (boolean) => {
    dispatch(setLoginLoader(boolean));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
