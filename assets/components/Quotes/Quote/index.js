/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React from 'react';
import PropTypes from 'prop-types';

import './quote.scss';

// == Component

const Quote = ({ quote }) => (
  <div className="quote">
    <p className="quoteText">{quote.text}</p>
  </div>
);

// == PropTypes

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};

// == Export

export default Quote;
