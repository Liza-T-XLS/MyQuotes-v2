// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './signup.scss';

// == Component

const Signup = ({
  pseudonym,
  password,
  confirmedPassword,
  changeField,
}) => {
  const onChangeHandler = (e) => {
    console.log('onChangeHandler triggered: ' + e.target.value + ' for: ' + e.target.name);
    changeField(e.target.value, e.target.name);
  };

  return (
    <div className="signup">
      <h2>Sign up!</h2>
      <form className="signupForm">
        <label htmlFor="pseudonym">
          <span>Pseudonym</span>
          <input type="text" name="pseudonym" id="pseudonym" value={pseudonym} onChange={onChangeHandler} required />
        </label>
        <label htmlFor="password">
          <span>Enter a password</span>
          <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} required />
        </label>
        <label htmlFor="confirmedPassword">
          <span>Confirm your Password</span>
          <input type="password" name="confirmedPassword" id="confirmedPassword" value={confirmedPassword} onChange={onChangeHandler} required />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

// PropTypes

Signup.propTypes = {
  pseudonym: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

// == Export

export default Signup;
