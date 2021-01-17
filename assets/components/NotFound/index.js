// ==  Imports

import React from 'react';
import { Helmet } from 'react-helmet';

import './notFound.scss';

import LinkButton from '../LinkButton';

// == Component

const NotFound = () => (
  <div className="notFound">
    <Helmet>
      <title>MyQuotes | 404</title>
    </Helmet>
    <p className="notFoundText">
      Oops! The page you are looking for doesn't exist.
      <br />
    </p>
    <LinkButton buttonLabel="Home" buttonLink="" />
  </div>
);

// == Export

export default NotFound;
