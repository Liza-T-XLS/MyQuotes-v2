// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

import './button.scss';

// == Component

const Button = ({ buttonLabel }) => {
  const slugifiedLink = slugify(buttonLabel, { lower: true });
  const link = `/${slugifiedLink}`;

  return (
    <button className="buttonComponent" type="button">
      <Link to={link}>{buttonLabel}</Link>
    </button>
  );
};

// PropTypes

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

// == Export

export default Button;
