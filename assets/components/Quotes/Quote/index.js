/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React from 'react';
import PropTypes from 'prop-types';

import './quote.scss';
import copieIcon from '../../../images/copie-26.png';

// == Component

const Quote = ({ quote }) => {
  const onClickHandler = (e) => {
    const quoteText = e.target.previousSibling.innerText;
    navigator.clipboard.writeText(quoteText);
  };

  return (
    <div className="quote">
      <div className="quoteMain">
        <p className="quoteText">{quote.text}</p>
        <img className="copieIcon" src={copieIcon} alt="copie icon" onClick={onClickHandler} />
      </div>
      <details>
        <summary>
          More
        </summary>
        <p>
          {(quote.authorFirstName || quote.authorLastName) && `Author: ${quote.authorFirstName} ${quote.authorLastName}`}
        </p>
      </details>
    </div>
  );
};
// == PropTypes

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};

// == Export

export default Quote;
