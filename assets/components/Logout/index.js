// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './logout.scss';

import LinkButton from '../LinkButton';
import Loader from '../Loader';

// == Component

const Logout = ({ logOut, logoutLoader, isLogged }) => {
  useEffect(() => {
    logOut();
  }, []);

  return (
    <>
      <Helmet>
        <title>MyQuotes | Log Out</title>
      </Helmet>
      {logoutLoader && <Loader />}
      {!isLogged && (
        <div className="logout">
          <h2>Logged out!</h2>
          <p className="logoutText">
            You have successfully logged out.
          </p>
          <LinkButton buttonLabel="Home" buttonLink="" />
        </div>
      )}
      {isLogged && (
        <div className="logoutFail">
          <h2>Logout failed!</h2>
          <p>
            Oops! Something went wrong and you were not properly logged out...
          </p>
          <LinkButton buttonLabel="Home" buttonLink="" />
        </div>
      )}
    </>
  );
};

// PropTypes

Logout.propTypes = {
  logOut: PropTypes.func.isRequired,
  logoutLoader: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export

export default Logout;
