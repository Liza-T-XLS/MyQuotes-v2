// == Imports

import React from 'react';

import './login.scss';

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
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
);

// PropTypes

// == Export

export default Login;
