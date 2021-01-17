/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import './login.scss';
import visibleIcon from '../../images/visible-24.png';

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
  loader,
  setLoginLoader,
  isLogged,
  logOut,
}) => {
  useEffect(() => {
    console.log('Login form useEffect');
    clearLogInForm();
  }, []);

  const emailClassName = classNames('email', { invalid: formErrors.error.length > 0 });
  const passwordClassName = classNames('password', { invalid: formErrors.error.length > 0 });

  const onChangeHandler = (e) => {
    console.log('onChangeHandler triggered: ' + e.target.value + ' for: ' + e.target.name);
    changeField(e.target.value, e.target.name);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('onSubmitHandler triggered');
    logIn();
    setLoginLoader(true);
  };

  const logOutOnClickHandler = (e) => {
    console.log('logOutOnClickHandler triggered');
    logOut();
  };

  return (
    <>
      <Helmet>
        <title>MyQuotes | Log In</title>
      </Helmet>
      {loader && <Loader />}
      {!isLogged && (
        <div className="login">
          <h2>Log in!</h2>
          <form className="loginForm" onSubmit={onSubmitHandler} noValidate>
            <label htmlFor="email">
              <span>Email</span>
              <input type="text" name="email" id="email" value={email} onChange={onChangeHandler} required className={emailClassName} />
            </label>
            <label htmlFor="password">
              <span>Enter your password</span>
              <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} required className={passwordClassName} />
              <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
            </label>
            <div className="errorMsg">{[formErrors.error].length > 0 && <span>{formErrors.error}</span>}</div>
            <button type="submit">Log in</button>
          </form>
        </div>
      )}
      {isLogged && (
        <div className="confirmationMsg">
          <h2>You are logged in!</h2>
          <p>
            You can now access and manage your quotes.
          </p>
          <LinkButton buttonLabel="Quotes" buttonLink="quotes" />
          <button type="button" onClick={logOutOnClickHandler}>Log out</button>
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
  formErrors: PropTypes.objectOf(
    PropTypes.shape({
      error: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  clearLogInForm: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  setLoginLoader: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

// == Export

export default Login;
