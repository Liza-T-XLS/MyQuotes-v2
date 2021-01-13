/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';
import visibleIcon from '../../images/visible-24.png';

import { passwordVisibilityOnClickHandler } from '../../utils/handlers';

// == Component

const Login = ({ email, password, changeField, logIn }) => {
  const onChangeHandler = (e) => {
    console.log('onChangeHandler triggered: ' + e.target.value + ' for: ' + e.target.name);
    changeField(e.target.value, e.target.name);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('onSubmitHandler triggered');
    logIn();
  };

  return (
    <div className="login">
      <h2>Log in!</h2>
      <form className="loginForm" onSubmit={onSubmitHandler}>
        <label htmlFor="email">
          <span>Email</span>
          <input type="text" name="email" id="email" value={email} onChange={onChangeHandler} required />
        </label>
        <label htmlFor="password">
          <span>Enter your password</span>
          <input type="password" name="password" id="password" value={password} onChange={onChangeHandler} required />
          <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

// PropTypes

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

// == Export

export default Login;
