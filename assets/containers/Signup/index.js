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
  pseudonym: state.registration.pseudonym,
  email: state.registration.email,
  password: state.registration.password,
  confirmedPassword: state.registration.confirmedPassword,
  formErrors: state.registration.formErrors,
  loader: state.registration.loader,
  registrationComplete: state.registration.registrationComplete,
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
