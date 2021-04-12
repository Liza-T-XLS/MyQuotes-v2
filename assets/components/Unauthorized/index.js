// ==  Imports

import React from 'react';
import { Helmet } from 'react-helmet';

import './unauthorized.scss';
import logInImg from '../../images/authentication.svg';

import LinkButton from '../LinkButton';

// == Component

const Unauthorized = () => (
  <div className="unauthorized">
    <Helmet>
      <title>MyQuotes | 403</title>
    </Helmet>
    <h2>Unauthorized</h2>
    <p className="unauthorizedText">
      To access this page, you must be logged in.
      <br />
    </p>
    <LinkButton buttonLabel="Log in" buttonLink="login" />
    <img className="unauthorizedImg" src={logInImg} alt="" />
  </div>
);

// == Export

export default Unauthorized;
