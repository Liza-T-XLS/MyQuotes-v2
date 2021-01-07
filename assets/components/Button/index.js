// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

// == Component

const Button = ({ buttonLabel }) => (
  <button className="buttonComponent" type="button">
    <a href="/">{buttonLabel}</a>
  </button>
);

// PropTypes

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

// == Export

export default Button;
