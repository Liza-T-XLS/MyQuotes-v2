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
    <h2>Login!</h2>
    <form className="loginForm">
      <label htmlFor="pseudonym">
        <span>Pseudonym</span>
        <input type="text" name="pseudonym" id="pseudonym" required />
      </label>
      <label htmlFor="password">
        <span>Enter a password</span>
        <input type="password" name="password" id="password" required />
        <img className="passwordToggle" src={visibleIcon} alt="password toggle" onClick={passwordVisibilityOnClickHandler} />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
);

// PropTypes

// == Export

export default Login;
