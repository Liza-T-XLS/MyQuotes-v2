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
import copieIcon from '../../../images/copy.svg';
import editIcon from '../../../images/edit.svg';
import Dialog from '../../../containers/Quotes/Dialog';

// == Component

const Quote = forwardRef(({ quote, displayFormOnClickHandler, changeQuoteFormLabels, loadQuoteData }, ref) => {
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

  const editOnClickHandler = () => {
    console.log('edit icon clicked');
    changeQuoteFormLabels('Edit the quote', 'Edit');
    loadQuoteData(quote.id, quote.text, quote.authorFirstName, quote.authorLastName, quote.characterName, quote.mediumTitle, quote.tags);
    displayFormOnClickHandler();
  };

  return (
    <div className="quote" ref={quoteRef} id={quote.id}>
      <div className="quoteMain">
        <p className="quoteText" onClick={quoteOnClickHandler}>{quote.text}</p>
        <img className="copieIcon" src={copieIcon} alt="copie icon" onClick={copyOnClickHandler} />
      </div>
      <div className={quoteDetailsCSS}>
        <div className="quoteDetailsHeader">
          <span className="detailsLabel">Details</span>
          <div className="quoteOptions">
            <img className="editIcon" src={editIcon} alt="edit icon" onClick={editOnClickHandler} />
            <Dialog quote={quote} />
          </div>
        </div>
        <div className="details">
          {(!quote.authorFirstName && !quote.authorLastName && !quote.characterName && !quote.mediumTitle && quote.tags < 1) && <p>No details provided. <span className="editSpan" onClick={editOnClickHandler} role="button" tabIndex="0">Edit?</span></p>}
          {(quote.authorFirstName || quote.authorLastName) && <p><span className="detailLabel">Author</span>: {quote.authorFirstName} {quote.authorLastName}</p>}
          {quote.characterName && <p><span className="detailLabel">Character</span>: {quote.characterName}</p>}
          {quote.mediumTitle && <p><span className="detailLabel">Medium</span>: {quote.mediumTitle}</p>}
          {quote.tags.length > 0 && (
            <div className="quoteTags">
              {quote.tags.map((tag) => (
                <div key={tag.id} className="quoteTag">
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// == PropTypes

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  displayFormOnClickHandler: PropTypes.func.isRequired,
  changeQuoteFormLabels: PropTypes.func.isRequired,
  loadQuoteData: PropTypes.func.isRequired,
};

// == Export

export default Quote;
