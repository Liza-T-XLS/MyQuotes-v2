// ==  Imports

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './activation.scss';

// import LinkButton from '../LinkButton';
import Loader from '../Loader';

// == Component

const Activation = ({ activationLoader, activateUser, activationComplete, clearActivation }) => {
  useEffect(() => {
    console.log('Activation useEffect');
    clearActivation();
    activateUser();
  }, []);

  return (
    <div className="activation">
      <Helmet>
        <title>MyQuotes | Activation</title>
      </Helmet>
      {activationLoader && <Loader />}
      {!activationLoader && activationComplete && (
        <p>Congratulations! Your account has been activated. You can now access your personal board by logging in.</p>
      )}
    </div>
  );
};

// PropTypes

Activation.propTypes = {
  activationLoader: PropTypes.bool.isRequired,
  activateUser: PropTypes.func.isRequired,
  activationComplete: PropTypes.bool.isRequired,
  clearActivation: PropTypes.func.isRequired,
};

// == Export

export default Activation;
