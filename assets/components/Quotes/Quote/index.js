/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React, { useState, forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './quote.scss';
import copieIcon from '../../../images/copie-26.png';

// == Component

const Quote = forwardRef(({ quote }, ref) => {
  const copyOnClickHandler = (e) => {
    const quoteText = e.target.previousSibling.innerText;
    navigator.clipboard.writeText(quoteText);
  };

  const [isActive, setActive] = useState(false);

  const quoteDetailsCSS = classNames('quoteDetails', { active: isActive });

  const quoteRef = useRef(null);

  const quotesList = ref.current;

  const quotesListOnClickHandler = (e) => {
    // if a click on another quote is detected, it opens the details of said quote and closes the quote's ones
    if (e.target.closest('.quote').id !== quoteRef.current.id) {
      setActive(false);
      quotesList.removeEventListener('click', quotesListOnClickHandler);
    }
  };

  const quoteOnClickHandler = () => {
    setActive(!isActive);
    quotesList.addEventListener('click', quotesListOnClickHandler);
  };

  return (
    <div className="quote" ref={quoteRef} id={quote.id}>
      <div className="quoteMain">
        <p className="quoteText" onClick={quoteOnClickHandler}>{quote.text}</p>
        <img className="copieIcon" src={copieIcon} alt="copie icon" onClick={copyOnClickHandler} />
      </div>
      <div className={quoteDetailsCSS}>
        {(!quote.authorFirstName && !quote.authorLastName && !quote.characterName && !quote.mediumTitle) && <p>No details provided. <a href="/">Edit?</a></p>}
        {(quote.authorFirstName || quote.authorLastName) && <p>Author: {quote.authorFirstName} {quote.authorLastName}</p>}
        {(quote.characterName) && <p>Character: {quote.characterName}</p>}
        {(quote.mediumTitle) && <p>Medium: {quote.mediumTitle}</p>}
      </div>
    </div>
  );
});

// == PropTypes

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};

// == Export

export default Quote;
