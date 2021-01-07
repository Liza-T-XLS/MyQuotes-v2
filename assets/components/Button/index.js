// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import './button.scss';

// == Component

const Button = ({ buttonLabel }) => {
  const slugifiedLink = slugify(buttonLabel, { lower: true });
  const link = `/${slugifiedLink}`;

  return (
    <button className="buttonComponent" type="button">
      <a href={link}>{buttonLabel}</a>
    </button>
  );
};

// PropTypes

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

// == Export

export default Button;
