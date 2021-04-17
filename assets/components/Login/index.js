/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import './login.scss';
import visibleIcon from '../../images/visibility-36dp.svg';
import logInImg from '../../images/authentication.svg';
import logInConfirmationImg from '../../images/taking_notes.svg';

import LinkButton from '../LinkButton';
import Loader from '../Loader';

import { passwordVisibilityOnClickHandler } from '../../utils/handlers';

// == Component

const Login = ({
  email,
  password,
  changeField,
  formErrors,
  logIn,
  clearLogInForm,
  loginLoader,
  setLoginLoader,
  isLogged,
}) => {
  useEffect(() => {
    clearLogInForm();
  }, []);

  const emailClassName = classNames('email', { invalid: formErrors.error.length > 0 });
  const passwordClassName = classNames('password', { invalid: formErrors.error.length > 0 });

  const onChangeHandler = (e) => {
    changeField(e.target.value, e.target.name);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    logIn();
    setLoginLoader(true);
  };

  return (
    <>
      <Helmet>
        <title>MyQuotes | Log In</title>
      </Helmet>
      {loginLoader && <Loader />}
      {!isLogged && (
        <div className="login">
          <h2>Log in!</h2>
          <form className="loginForm" onSubmit={onSubmitHandler} noValidate>
            <label className="loginLabel" htmlFor="email">
              <span>Email</span>
              <input type="text" name="email" id="email" value={email} onChange={onChangeHandler} required className={emailClassName} />
            </label>
            <label className="loginLabel" htmlFor="password">
              <span>Enter your password</span>
              <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} required className={passwordClassName} />
              <img className="passwordToggle" src={visibleIcon} alt="password toggle" title="show password" onClick={passwordVisibilityOnClickHandler} />
            </label>
            <div className="errorMsg">{[formErrors.error].length > 0 && <span>{formErrors.error}</span>}</div>
            <button className="logInButton" type="submit">Log in</button>
          </form>
          <img className="logInImg" src={logInImg} alt="" />
        </div>
      )}
      {isLogged && (
        <div className="confirmationMsg">
          <h2>You are logged in!</h2>
          <p>
            You can now access and manage your quotes.
          </p>
          <LinkButton buttonLabel="Quotes" buttonLink="quotes" />
          <LinkButton buttonLabel="Log out" buttonLink="logout" />
          <img className="logInConfirmationImg" src={logInConfirmationImg} alt="" />
        </div>
      )}
    </>
  );
};

// PropTypes

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    error: PropTypes.string.isRequired,
  }).isRequired,
  clearLogInForm: PropTypes.func.isRequired,
  loginLoader: PropTypes.bool.isRequired,
  setLoginLoader: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export

export default Login;
