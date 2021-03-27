/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import './signup.scss';
import visibleIcon from '../../images/visible-24.png';

import Loader from '../Loader';
import LinkButton from '../LinkButton';
import signUpImg from '../../images/fill_forms.svg';
import signInConfirmationImg from '../../images/taking_notes.svg';

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
  signUp,
  loader,
  setLoader,
  registrationComplete,
  clearSignUpForm,
}) => {
  useEffect(() => {
    console.log('Signup form useEffect');
    clearSignUpForm();
  }, []);

  const pseudonymClassName = classNames('pseudonym', { invalid: formErrors.pseudonym.length > 0 });
  const emailClassName = classNames('email', { invalid: formErrors.email.length > 0 });
  const passwordClassName = classNames('password', { invalid: formErrors.password.length > 0 });
  const passwordLabelClassName = classNames('', { passwordLabel: formErrors.password.length > 0 });
  const confirmedPasswordClassName = classNames('confirmedPassword', { invalid: formErrors.confirmedPassword.length > 0 });

  const onChangeHandler = (e) => {
    changeField(e.target.value, e.target.name);
    checkErrors(e.target.name);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('onSubmitHandler triggered');
    checkErrors('pseudonym');
    checkErrors('email');
    checkErrors('password');
    checkErrors('confirmedPassword');
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    console.log(Object.values(formErrors));
    if (errors === undefined && pseudonym !== '' && email !== '' && password !== '' && confirmedPassword !== '') {
      console.log('form submitted');
      setLoader(true);
      signUp();
    }
  };

  return (
    <>
      <Helmet>
        <title>MyQuotes | Sign Up</title>
      </Helmet>
      {loader && <Loader />}
      {!registrationComplete && (
      <div className="signup">
        <h2>Sign up!</h2>
        <form className="signupForm" onSubmit={onSubmitHandler} noValidate>
          <label htmlFor="pseudonym">
            <span>Pseudonym</span>
            <input type="text" name="pseudonym" id="pseudonym" value={pseudonym} onChange={onChangeHandler} minLength="2" required className={pseudonymClassName} />
            <div className="errorMsg">{[formErrors.pseudonym].length > 0 && <span>{formErrors.pseudonym}</span>}</div>
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" id="email" value={email} onChange={onChangeHandler} required className={emailClassName} />
            <div className="errorMsg">{[formErrors.email].length > 0 && <span>{formErrors.email}</span>}</div>
          </label>
          <label className={passwordLabelClassName} htmlFor="password">
            <span>Enter a password</span>
            <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} minLength="4" required className={passwordClassName} />
            <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
            <div className="errorMsg">{[formErrors.password].length > 0 && <span>{formErrors.password}</span>}</div>
          </label>
          <label htmlFor="confirmedPassword">
            <span>Confirm your password</span>
            <input type="password" name="confirmedPassword" id="confirmedPassword" value={confirmedPassword} onChange={onChangeHandler} required className={confirmedPasswordClassName} />
            <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
            <div className="errorMsg">{[formErrors.confirmedPassword].length > 0 && <span>{formErrors.confirmedPassword}</span>}</div>
          </label>
          <button className="signUpButton" type="submit">Sign up</button>
        </form>
        <img className="signUpImg" src={signUpImg} alt="" />
      </div>
      )}
      {registrationComplete && (
        <div className="confirmationMsg">
          <h2>Thank you for signing up!</h2>
          <p>
            You will now receive an email to confirm your registration.
          </p>
          <LinkButton buttonLabel="Log in" buttonLink="login" />
          <img className="signInConfirmationImg" src={signInConfirmationImg} alt="" />
        </div>
      )}
    </>
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
  signUp: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  setLoader: PropTypes.func.isRequired,
  registrationComplete: PropTypes.bool.isRequired,
  clearSignUpForm: PropTypes.func.isRequired,
};

// == Export

export default Signup;
