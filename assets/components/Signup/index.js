/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './signup.scss';
import visibleIcon from '../../images/visible-24.png';

import { passwordVisibilityOnClickHandler } from '../../utils/handlers';

// == Component

const Signup = ({
  pseudonym,
  email,
  password,
  confirmedPassword,
  changeField,
  checkErrors,
  formErrors,
}) => {
  const onChangeHandler = (e) => {
    console.log('onChangeHandler triggered: ' + e.target.value + ' for: ' + e.target.name);
    changeField(e.target.value, e.target.name);
    checkErrors(e.target.name);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('onSubmitHandler triggered');
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    console.log(Object.values(formErrors));
    if (errors === undefined) {
      console.log('form submitted');
    }
  };

  return (
    <div className="signup">
      <h2>Sign up!</h2>
      <form className="signupForm" onSubmit={onSubmitHandler} noValidate>
        <label htmlFor="pseudonym">
          <span>Pseudonym</span>
          <input type="text" name="pseudonym" id="pseudonym" value={pseudonym} onChange={onChangeHandler} minLength="2" required />
          {/* {formErrors.pseudonym.length > 0 && <span className="errorMsg">{formErrors.pseudonym}</span>} */}
          <div className="errorMsg">{[formErrors.pseudonym].length > 0 && <span>{formErrors.pseudonym}</span>}</div>
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input type="email" name="email" id="email" value={email} onChange={onChangeHandler} required />
          <div className="errorMsg">{[formErrors.email].length > 0 && <span>{formErrors.email}</span>}</div>
        </label>
        <label htmlFor="password">
          <span>Enter a password</span>
          <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} minLength="4" required />
          <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
          <div className="errorMsg">{[formErrors.password].length > 0 && <span>{formErrors.password}</span>}</div>
        </label>
        <label htmlFor="confirmedPassword">
          <span>Confirm your Password</span>
          <input type="password" name="confirmedPassword" id="confirmedPassword" value={confirmedPassword} onChange={onChangeHandler} required />
          <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
          <div className="errorMsg">{[formErrors.confirmedPassword].length > 0 && <span>{formErrors.confirmedPassword}</span>}</div>
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

// PropTypes

Signup.propTypes = {
  pseudonym: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  checkErrors: PropTypes.func.isRequired,
  formErrors: PropTypes.objectOf(
    PropTypes.shape({
      pseudonym: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      confirmedPassword: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export

export default Signup;
