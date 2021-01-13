/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// == Imports

import React from 'react';

import './login.scss';
import visibleIcon from '../../images/visible-24.png';

import { passwordVisibilityOnClickHandler } from '../../utils/handlers';

// == Component

const Login = () => (
  <div className="login">
    <h2>Log in!</h2>
    <form className="loginForm">
      <label htmlFor="email">
        <span>Email</span>
        <input type="text" name="email" id="email" required />
      </label>
      <label htmlFor="password">
        <span>Enter your password</span>
        <input type="password" name="password" id="password" required />
        <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
      </label>
      <button type="submit">Log in</button>
    </form>
  </div>
);

// PropTypes

// == Export

export default Login;
