/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
// == Imports

import React from 'react';

import './home.scss';

import Button from '../Button';

// == Component

const Home = () => (
  <div className="home">
    <h2>Welcome to MyQuotes!</h2>
    <p>
      Any group of words, short or long, can be a quote. Some quotes are popular, some aren't. But they got <strong>your</strong> attention!<br />
      <br />
      MyQuotes enables you to save any quote to your personal space. They are <strong>your</strong> quotes!
    </p>
    <div className="access">
      <Button buttonLabel="Sign up" />
      <span>Already have an account?</span>
      <Button buttonLabel="Login" />
    </div>
  </div>
);

// == Export

export default Home;