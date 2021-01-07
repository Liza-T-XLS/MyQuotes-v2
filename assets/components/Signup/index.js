// == Imports

import React from 'react';

import './signup.scss';

// == Component

const Signup = () => (
  <div className="signup">
    <h2>Sign up!</h2>
    <form className="signupForm">
      <label htmlFor="pseudonym">
        Pseudonym
        <input type="text" name="pseudonym" id="pseudonym" required />
      </label>

    </form>
  </div>
);

// PropTypes

// == Export

export default Signup;
