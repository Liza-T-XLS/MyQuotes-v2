// ==  Imports

import React from 'react';
import { Helmet } from 'react-helmet';

import './notFound.scss';
import notFoundImg from '../../images/lost.svg';

import LinkButton from '../LinkButton';

// == Component

const NotFound = () => (
  <div className="notFound">
    <Helmet>
      <title>MyQuotes | 404</title>
    </Helmet>
    <p className="notFoundText">
      Oops! The page you are looking for doesn&apos;t exist.
      <br />
    </p>
    <LinkButton buttonLabel="Home" buttonLink="" />
    <img className="notFoundImg" src={notFoundImg} alt="" />
  </div>
);

// == Export

export default NotFound;
