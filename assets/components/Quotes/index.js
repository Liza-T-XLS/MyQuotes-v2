/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './quotes.scss';

import Quote from './Quote';

// == Component

const Quotes = ({ loadQuotes, quotes }) => {
  useEffect(() => {
    console.log('useEffect: quotes');
    loadQuotes();
    console.log(quotes);
  }, []);
  return (
    <div className="quotes">
      <Helmet>
        <title>MyQuotes | Board</title>
      </Helmet>
      {quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

// == PropTypes

Quotes.propTypes = {
  loadQuotes: PropTypes.func.isRequired,
  quotes: PropTypes.array.isRequired,
};

// == Export

export default Quotes;
