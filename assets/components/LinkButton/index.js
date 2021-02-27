// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

import './linkButton.scss';

// == Component

const LinkButton = ({ buttonLabel, buttonLink }) => {
  const slugifiedLink = slugify(buttonLink, { lower: true });
  const link = `/${slugifiedLink}`;

  return (
    <div className="linkButton">
      <Link to={link}>{buttonLabel}</Link>
    </div>
  );
};

// PropTypes

LinkButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

// == Export

export default LinkButton;
