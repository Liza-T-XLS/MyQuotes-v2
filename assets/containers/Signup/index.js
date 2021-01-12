// == Imports

import { connect } from 'react-redux';

import Signup from '../../components/Signup';
import {
  changeField,
  checkErrors,
  signUp,
  setLoader,
  clearSignUpForm,
} from '../../actions/registration';

const mapStateToProps = (state) => ({
  pseudonym: state.pseudonym,
  email: state.email,
  password: state.password,
  confirmedPassword: state.confirmedPassword,
  formErrors: state.formErrors,
  loader: state.loader,
  registrationComplete: state.registrationComplete,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, fieldName) => {
    dispatch(changeField(newValue, fieldName));
  },
  checkErrors: (fieldName) => {
    dispatch(checkErrors(fieldName));
  },
  signUp: () => {
    dispatch(signUp());
  },
  setLoader: (boolean) => {
    dispatch(setLoader(boolean));
  },
  clearSignUpForm: () => {
    dispatch(clearSignUpForm());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
