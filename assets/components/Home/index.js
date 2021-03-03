/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './home.scss';
import homeImg from '../../images/work_chat.svg';

import LinkButton from '../LinkButton';

// == Component

const Home = ({ isLogged }) => (
  <div className="home">
    <Helmet>
      <title>MyQuotes | Home</title>
    </Helmet>
    <h2>Welcome to MyQuotes!</h2>
    <p>
      Any group of words, short or long, can be a quote. Some quotes are popular, some aren't. But they got <strong>your</strong> attention!<br />
      <br />
      MyQuotes enables you to save any quote to your personal board. They are <strong>your</strong> quotes!
    </p>
    <div className="access">
      {!isLogged && (
      <>
        <LinkButton buttonLabel="Sign up" buttonLink="signup" />
        <span>Already have an account?</span>
        <LinkButton buttonLabel="Log in" buttonLink="login" />
      </>
      )}
      {isLogged && (
      <>
        <LinkButton buttonLabel="My quotes" buttonLink="quotes" />
      </>
      )}
    </div>
    <img className="homeImg" src={homeImg} alt="" />
  </div>
);

// == PropTypes

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export

export default Home;
