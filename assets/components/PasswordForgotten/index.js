/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// ==  Imports

import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './passwordForgotten.scss';
import notFoundImg from '../../images/lost.svg';
import visibleIcon from '../../images/visibility-36dp.svg';

import Loader from '../Loader';
import LinkButton from '../LinkButton';

import { passwordVisibilityOnClickHandler } from '../../utils/handlers';

// == Component

const PasswordForgotten = ({
  email,
  formErrors,
  changePasswordForgottenField,
  checkPasswordForgottenFormErrors,
  passwordForgottenLoader,
  setPasswordForgottenLoader,
  requestToken,
  tokenIsSent,
  token,
  checkToken,
  resetAuthorization,
  newPassword,
  confirmedNewPassword,
  resetPassword,
  finalStep,
  passwordChanged,
}) => {
  const emailClassName = classNames('email', { invalid: formErrors.email.length > 0 });
  const tokenClassName = classNames('email', { invalid: formErrors.token.length > 0 });
  const newPasswordClassName = classNames('newPassword', { invalid: formErrors.newPassword.length > 0 });
  const confirmedNewPasswordClassName = classNames('newConfirmedPassword', { invalid: formErrors.confirmedNewPassword.length > 0 });
  const newPasswordLabelClassName = classNames('passwordForgottenLabel', { newPasswordLabel: formErrors.newPassword.length > 0 });

  const onChangeHandler = (e) => {
    changePasswordForgottenField(e.target.value, e.target.name);
    checkPasswordForgottenFormErrors(e.target.name);
  };

  const emailOnSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formErrors);
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    console.log(errors);

    if (errors === undefined && email !== '') {
      setPasswordForgottenLoader(true);
      console.log('submitted');
      requestToken();
    }
  };

  const tokenOnSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formErrors);
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    console.log(errors);

    if (errors === undefined && token !== '') {
      setPasswordForgottenLoader(true);
      console.log('submitted');
      checkToken();
    }
  };

  const newPasswordOnSubmitHandler = (e) => {
    e.preventDefault();
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    if (errors === undefined && newPassword !== '' && confirmedNewPassword !== '') {
      setPasswordForgottenLoader(true);
      console.log('submitted');
      resetPassword();
    }
  };

  return (
    <>
      <Helmet>
        <title>MyQuotes | Password forgotten</title>
      </Helmet>
      {passwordForgottenLoader && <Loader />}
      <div className="passwordForgotten">
        <h2>Forgot your password?</h2>
        {!tokenIsSent && (
          <>
            <form className="passwordForgottenForm" onSubmit={emailOnSubmitHandler} noValidate>
              <label className="passwordForgottenLabel" htmlFor="email">
                <span>Enter your email</span>
                <input type="email" name="email" id="email" value={email} onChange={onChangeHandler} required className={emailClassName} />
                <div className="errorMsg">{formErrors.email.length > 0 && <span>{formErrors.email}</span>}</div>
              </label>
              <button className="passwordForgottenButton" type="submit">Submit</button>
            </form>
          </>
        )}
        {tokenIsSent && !resetAuthorization && (
          <>
            <form className="passwordForgottenForm" onSubmit={tokenOnSubmitHandler} noValidate>
              <label className="passwordForgottenLabel" htmlFor="token">
                <span>Enter the code you received by email</span>
                <input type="text" name="token" id="token" value={token} onChange={onChangeHandler} required className={tokenClassName} />
                <div className="errorMsg">{formErrors.token.length > 0 && <span>{formErrors.token}</span>}</div>
              </label>
              <button className="passwordForgottenButton" type="submit">Submit</button>
            </form>
          </>
        )}
        {resetAuthorization && !finalStep && !passwordChanged && (
          <>
            <form className="passwordForgottenForm" onSubmit={newPasswordOnSubmitHandler} noValidate>
              <label className={newPasswordLabelClassName} htmlFor="newPassword">
                <span>Enter a new password</span>
                <input type="password" name="newPassword" id="newPassword" value={newPassword} onChange={onChangeHandler} required className={newPasswordClassName} />
                <img className="passwordToggle" src={visibleIcon} alt="password toggle" title="show password" onClick={passwordVisibilityOnClickHandler} />
                <div className="errorMsg">{formErrors.newPassword.length > 0 && <span>{formErrors.newPassword}</span>}</div>
              </label>
              <label className="passwordForgottenLabel" htmlFor="confirmedNewPassword">
                <span>Confirm your new password</span>
                <input type="password" name="confirmedNewPassword" id="confirmedNewPassword" value={confirmedNewPassword} onChange={onChangeHandler} required className={confirmedNewPasswordClassName} />
                <img className="passwordToggle" src={visibleIcon} alt="password toggle" title="show password" onClick={passwordVisibilityOnClickHandler} />
                <div className="errorMsg">{formErrors.confirmedNewPassword.length > 0 && <span>{formErrors.confirmedNewPassword}</span>}</div>
              </label>
              <button className="passwordForgottenButton" type="submit">Submit</button>
            </form>
          </>
        )}
        {finalStep && passwordChanged && (
          <>
            <p className="confirmationText">
              Your password has been changed. You can now log in with your new password.
            </p>
            <LinkButton buttonLabel="Log in" buttonLink="login" />
          </>
        )}
        <img className="notFoundImg" src={notFoundImg} alt="" />
      </div>

    </>
  );
};

// PropTypes

PasswordForgotten.propTypes = {
  email: PropTypes.string.isRequired,
  formErrors: PropTypes.shape({
    email: PropTypes.string.isRequired,
    token: PropTypes.number.isRequired,
    newPassword: PropTypes.string.isRequired,
    confirmedNewPassword: PropTypes.string.isRequired,
  }).isRequired,
  changePasswordForgottenField: PropTypes.func.isRequired,
  checkPasswordForgottenFormErrors: PropTypes.func.isRequired,
  passwordForgottenLoader: PropTypes.bool.isRequired,
  setPasswordForgottenLoader: PropTypes.func.isRequired,
  requestToken: PropTypes.func.isRequired,
  tokenIsSent: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  checkToken: PropTypes.func.isRequired,
  resetAuthorization: PropTypes.bool.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmedNewPassword: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired,
  finalStep: PropTypes.bool.isRequired,
  passwordChanged: PropTypes.bool.isRequired,
};

// == Export

export default PasswordForgotten;
