// == Imports

import { connect } from 'react-redux';

import Login from '../../components/Login';
import {
  changeField,
  logIn,
} from '../../actions/authentication';

const mapStateToProps = (state) => ({
  email: state.authentication.email,
  password: state.authentication.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, fieldName) => {
    dispatch(changeField(newValue, fieldName));
  },
  logIn: (email, password) => {
    dispatch(logIn(email, password));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
