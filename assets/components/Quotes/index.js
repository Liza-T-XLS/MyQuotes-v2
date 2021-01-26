/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './quotes.scss';
import Pagination from '@material-ui/lab/Pagination';
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
  changeAddQuoteFormField,
  quoteText,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  addQuote,
  pageQuantity,
  currentPage,
  saveCurrentPage,
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
    if (!addQuoteFormStatus) {
      saveFormHeight(formHeight);
    } else {
      saveFormHeight(1);
    }
    changeAddQuoteFormStatus();
  };

  const onChangeHandler = (e) => {
    console.log('onChangeHandler triggered: ' + e.target.value + ' for: ' + e.target.name);
    changeAddQuoteFormField(e.target.value, e.target.name);
    // checkErrors(e.target.name);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
    addQuote();
  };

  const pageChangeHandler = (e, value) => {
    console.log(e);
    console.log(value);
    saveCurrentPage(value);
    loadQuotes();
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
      <Pagination size="small" count={pageQuantity} page={currentPage} showFirstButton showLastButton siblingCount={1} boundaryCount={1} onChange={pageChangeHandler} />
      <form className={addQuoteFormClassName} style={addQuoteFormStyle} onSubmit={onSubmitHandler}>
        <h2>Add a quote</h2>
        <label htmlFor="quoteText">
          <span>Text</span>
          <textarea name="quoteText" value={quoteText} onChange={onChangeHandler} id="quoteText" minLength="1" required />
        </label>
        <label htmlFor="authorFirstName">
          <span>Author's first name</span>
          <input className="addQuoteFormInput" name="authorFirstName" value={authorFirstName} onChange={onChangeHandler} id="authorFirstName" minLength="1" />
        </label>
        <label htmlFor="authorLastName">
          <span>Author's last name</span>
          <input className="addQuoteFormInput" name="authorLastName" value={authorLastName} onChange={onChangeHandler} id="authorLastName" minLength="1" />
        </label>
        <label htmlFor="character's name">
          <span>Character's last name</span>
          <input className="addQuoteFormInput" name="characterName" value={characterName} onChange={onChangeHandler} id="character's name" minLength="1" />
        </label>
        <label htmlFor="mediumTitle">
          <span>Medium's title</span>
          <input className="addQuoteFormInput" name="mediumTitle" value={mediumTitle} onChange={onChangeHandler} id="mediumTitle" minLength="1" />
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
  changeAddQuoteFormField: PropTypes.func.isRequired,
  quoteText: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  mediumTitle: PropTypes.string.isRequired,
  addQuote: PropTypes.func.isRequired,
  pageQuantity: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
};

// == Export

export default Quotes;
