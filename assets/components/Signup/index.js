// == Imports

import React from 'react';

import './signup.scss';

// == Component

const Signup = () => (
  <div className="signup">
    <h2>Sign up!</h2>
    <form className="signupForm">
      <label htmlFor="pseudonym">
        <span>Pseudonym</span>
        <input type="text" name="pseudonym" id="pseudonym" required />
      </label>
      <label htmlFor="password">
        <span>Enter a password</span>
        <input type="password" name="password" id="password" required />
      </label>
      <label htmlFor="confirmPassword">
        <span>Confirm your Password</span>
        <input type="password" name="confirmPassword" id="confirmPassword" required />
      </label>
      <button type="submit">Sign up</button>
    </form>
  </div>
);

// PropTypes

// == Export

export default Signup;
