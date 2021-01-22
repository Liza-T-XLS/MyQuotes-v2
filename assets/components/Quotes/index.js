/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './quotes.scss';
import addQuoteIcon from '../../images/addQuote-24.png';
import closeIcon from '../../images/close-30.png';

import Quote from './Quote';

// == Component

const Quotes = ({
  loadQuotes,
  quotes,
  addQuoteFormStatus,
  changeAddQuoteFormStatus,
  addQuoteFormHeight,
  headerHeight,
  saveFormHeight,
}) => {
  useEffect(() => {
    console.log('useEffect: quotes');
    loadQuotes();
    console.log(quotes);
  }, []);

  const addQuoteFormClassName = classNames('addQuoteForm', { active: addQuoteFormStatus });
  const quotesDivRef = useRef(null);
  const quotesMenuRef = useRef(null);
  const addQuoteFormStyle = {
    height: `${addQuoteFormHeight}px`,
  };

  const onClickHandler = (e) => {
    console.log('addQuote icon clicked');
    const formHeight = window.innerHeight - headerHeight - quotesMenuRef.current.clientHeight;
    console.log(window.innerHeight);
    console.log(headerHeight);
    console.log(quotesMenuRef.current.clientHeight);
    console.log(formHeight);
    if (!addQuoteFormStatus) {
      saveFormHeight(formHeight);
    } else {
      saveFormHeight(1);
    }
    changeAddQuoteFormStatus();
  };

  return (
    <div className="quotes" ref={quotesDivRef}>
      <Helmet>
        <title>MyQuotes | Board</title>
      </Helmet>
      <div className="quotesMenu" ref={quotesMenuRef}>
        {!addQuoteFormStatus && <img src={addQuoteIcon} alt="add quote icon" onClick={onClickHandler} />}
        {addQuoteFormStatus && <img src={closeIcon} alt="close form icon" onClick={onClickHandler} />}
      </div>
      <div className="quotesList">
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))}
      </div>
      <form className={addQuoteFormClassName} style={addQuoteFormStyle}>
        <h2>Add a quote</h2>
        <label htmlFor="quoteText">
          <span>Text</span>
          <textarea name="quoteText" id="quoteText" minLength="1" required />
        </label>
        <label htmlFor="authorFirstName">
          <span>Author's first name</span>
          <input className="addQuoteFormInput" name="authorFirstName" id="authorFirstName" minLength="1" />
        </label>
        <label htmlFor="authorLastName">
          <span>Author's last name</span>
          <input className="addQuoteFormInput" name="authorLastName" id="authorLastName" minLength="1" />
        </label>
        <label htmlFor="character's name">
          <span>Character's last name</span>
          <input className="addQuoteFormInput" name="character's name" id="character's name" minLength="1" />
        </label>
        <label htmlFor="mediumTitle">
          <span>Medium's title</span>
          <input className="addQuoteFormInput" name="mediumTitle" id="mediumTitle" minLength="1" />
        </label>
        <button className="addQuoteSubmitButton" type="submit">Add</button>
      </form>
    </div>
  );
};

// == PropTypes

Quotes.propTypes = {
  loadQuotes: PropTypes.func.isRequired,
  quotes: PropTypes.array.isRequired,
  addQuoteFormStatus: PropTypes.bool.isRequired,
  changeAddQuoteFormStatus: PropTypes.func.isRequired,
  addQuoteFormHeight: PropTypes.number.isRequired,
  headerHeight: PropTypes.number.isRequired,
  saveFormHeight: PropTypes.func.isRequired,
};

// == Export

export default Quotes;
