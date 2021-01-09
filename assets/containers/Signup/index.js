// == Imports

import { connect } from 'react-redux';

import Signup from '../../components/Signup';
import { changeField } from '../../actions/registration';

const mapStateToProps = (state) => ({
  pseudonym: state.pseudonym,
  password: state.password,
  confirmedPassword: state.confirmedPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, fieldName) => {
    dispatch(changeField(newValue, fieldName));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
