/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */

// == Imports

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import './settings.scss';
import editIcon from '../../images/edit.svg';
import visibleIcon from '../../images/visible-24.png';

import Loader from '../Loader';

import { passwordVisibilityOnClickHandler } from '../../utils/handlers';

// == Component

const Settings = ({
  loadUserData,
  pseudonym,
  email,
  password,
  confirmedPassword,
  currentPassword,
  pseudonymEditStatus,
  emailEditStatus,
  passwordEditStatus,
  setEditStatus,
  formErrors,
  changeUserDataField,
  checkEditErrors,
  clearUserDataChanges,
  loader,
  setSettingsLoader,
  submitChanges,
}) => {
  useEffect(() => {
    clearUserDataChanges();
    loadUserData();
  }, []);

  const pseudonymInput = useRef(null);
  const emailInput = useRef(null);

  const pseudonymClassName = classNames('pseudonym', { invalid: formErrors.pseudonym.length > 0 });
  const pseudonymEditIconClassName = classNames('editIcon', { active: pseudonymEditStatus });
  const emailEditIconClassName = classNames('editIcon', { active: emailEditStatus });
  const emailClassName = classNames('email', { invalid: formErrors.email.length > 0 });
  const passwordClassName = classNames('password', { invalid: formErrors.password.length > 0 });
  const passwordLabelClassName = classNames('', { passwordLabel: formErrors.password.length > 0 });
  const confirmedPasswordClassName = classNames('confirmedPassword', { invalid: formErrors.confirmedPassword.length > 0 });
  const currentPasswordClassName = classNames('currentPassword', { invalid: formErrors.currentPassword.length > 0 });

  const editOnClickHandler = (e) => {
    const inputField = e.target.previousSibling;
    const disabled = inputField.getAttribute('disabled');
    if (disabled === null) {
      inputField.setAttribute('disabled', true);
      setEditStatus(inputField.name, false);
    } else {
      inputField.removeAttribute('disabled');
      setEditStatus(inputField.name, true);
    }
  };

  const onChangeHandler = (e) => {
    changeUserDataField(e.target.value, e.target.name);
    checkEditErrors(e.target.name);
  };

  const editPasswordOnClickHandler = () => {
    setEditStatus('password', true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    checkEditErrors('pseudonym');
    checkEditErrors('email');
    if (password !== '') {
      checkEditErrors('password');
      checkEditErrors('confirmedPassword');
    }
    checkEditErrors('currentPassword');
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    if (errors === undefined && pseudonym !== '' && email !== '' && currentPassword !== '') {
      setSettingsLoader(true);
      submitChanges();
    }
  };

  const cancelChangesOnClickHandler = () => {
    clearUserDataChanges();
    loadUserData();
    pseudonymInput.current.setAttribute('disabled', true);
    emailInput.current.setAttribute('disabled', true);
  };

  return (
    <div className="settings">
      <Helmet>
        <title>MyQuotes | Settings</title>
      </Helmet>
      {loader && <Loader />}
      <h2>Settings</h2>
      <form className="userEditForm" onSubmit={onSubmitHandler} noValidate>
        <label htmlFor="pseudonym">
          <span>Pseudonym</span>
          <input ref={pseudonymInput} type="text" name="pseudonym" id="pseudonym" value={pseudonym} onChange={onChangeHandler} minLength="2" disabled className={pseudonymClassName} />
          <img className={pseudonymEditIconClassName} src={editIcon} alt="edit icon" title="edit your pseudonym" onClick={editOnClickHandler} />
          <div className="errorMsg">{formErrors.pseudonym.length > 0 && <span>{formErrors.pseudonym}</span>}</div>
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input ref={emailInput} type="email" name="email" id="email" value={email} onChange={onChangeHandler} disabled className={emailClassName} />
          <img className={emailEditIconClassName} src={editIcon} alt="edit icon" title="edit your email" onClick={editOnClickHandler} />
          <div className="errorMsg">{formErrors.email.length > 0 && <span>{formErrors.email}</span>}</div>
        </label>
        {!passwordEditStatus && (<button className="displayPasswordInputs" type="button" onClick={editPasswordOnClickHandler}>Change my password</button>)}
        {passwordEditStatus && (
          <>
            <label className={passwordLabelClassName} htmlFor="password">
              <span>Enter a new password</span>
              <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} minLength="4" required className={passwordClassName} />
              <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
              <div className="errorMsg">{formErrors.password.length > 0 && <span>{formErrors.password}</span>}</div>
            </label>
            <label htmlFor="confirmedPassword">
              <span>Confirm your new password</span>
              <input type="password" name="confirmedPassword" id="confirmedPassword" value={confirmedPassword} onChange={onChangeHandler} required className={confirmedPasswordClassName} />
              <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
              <div className="errorMsg">{formErrors.confirmedPassword.length > 0 && <span>{formErrors.confirmedPassword}</span>}</div>
            </label>
          </>
        )}
        <label htmlFor="currentPassword">
          <span>To confirm the changes, please enter your current password</span>
          <input type="password" name="currentPassword" id="currentPassword" value={currentPassword} onChange={onChangeHandler} required className={currentPasswordClassName} />
          <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
          <div className="errorMsg">{formErrors.currentPassword.length > 0 && <span>{formErrors.currentPassword}</span>}</div>
        </label>
        <button className="submitChangesButton" type="submit">Confirm changes</button>
        <button className="cancelChangesButton" type="button" onClick={cancelChangesOnClickHandler}>Cancel changes</button>
      </form>
    </div>
  );
};

// == PropTypes

Settings.propTypes = {
  loadUserData: PropTypes.func.isRequired,
  pseudonym: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
  pseudonymEditStatus: PropTypes.bool.isRequired,
  emailEditStatus: PropTypes.bool.isRequired,
  passwordEditStatus: PropTypes.bool.isRequired,
  setEditStatus: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    pseudonym: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmedPassword: PropTypes.string.isRequired,
    currentPassword: PropTypes.string.isRequired,
  }).isRequired,
  changeUserDataField: PropTypes.func.isRequired,
  checkEditErrors: PropTypes.func.isRequired,
  clearUserDataChanges: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  setSettingsLoader: PropTypes.func.isRequired,
  submitChanges: PropTypes.func.isRequired,
};

// == Export

export default Settings;
