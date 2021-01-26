/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './quote.scss';
import copieIcon from '../../../images/copie-26.png';

// == Component

const Quote = ({ quote }) => {
  const copyOnClickHandler = (e) => {
    const quoteText = e.target.previousSibling.innerText;
    navigator.clipboard.writeText(quoteText);
  };

  const [isActive, setActive] = useState(false);

  const quoteDetailsCSS = classNames('quoteDetails', { active: isActive });

  const quoteOnClickHandler = (e) => {
    console.log('quoteOnClickHandler');
    setActive(!isActive);
  };

  return (
    <div className="quote">
      <div className="quoteMain">
        <p className="quoteText" onClick={quoteOnClickHandler}>{quote.text}</p>
        <img className="copieIcon" src={copieIcon} alt="copie icon" onClick={copyOnClickHandler} />
      </div>
      <div className={quoteDetailsCSS}>
        <p>
          {(quote.authorFirstName || quote.authorLastName) && `Author: ${quote.authorFirstName} ${quote.authorLastName}`}
        </p>
      </div>
    </div>
  );
};
// == PropTypes

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};

// == Export

export default Quote;
