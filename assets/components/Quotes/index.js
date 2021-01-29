/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */

// ==  Imports

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './quotes.scss';
import Pagination from '@material-ui/lab/Pagination';
import addQuoteIcon from '../../images/addQuote-24.png';
import closeIcon from '../../images/close-30.png';

import Quote from './Quote';
import Form from '../../containers/Quotes/Form';

// == Component

const Quotes = ({
  loadQuotes,
  quotes,
  addQuoteFormStatus,
  changeAddQuoteFormStatus,
  headerHeight,
  saveFormHeight,
  pageQuantity,
  currentPage,
  saveCurrentPage,
}) => {
  useEffect(() => {
    console.log('useEffect: quotes');
    loadQuotes();
  }, []);

  const quotesListRef = useRef(null);

  const quotesDivRef = useRef(null);
  const quotesMenuRef = useRef(null);

  const onClickHandler = () => {
    console.log('addQuote icon clicked');
    const formHeight = window.innerHeight - headerHeight - quotesMenuRef.current.clientHeight;
    if (!addQuoteFormStatus) {
      saveFormHeight(formHeight);
    } else {
      saveFormHeight(1);
    }
    changeAddQuoteFormStatus();
  };

  const pageChangeHandler = (e, value) => {
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
      <div className="quotesList" ref={quotesListRef}>
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} ref={quotesListRef} />
        ))}
      </div>
      <Pagination size="small" count={pageQuantity} page={currentPage} showFirstButton showLastButton siblingCount={1} boundaryCount={1} onChange={pageChangeHandler} />
      <Form />
    </div>
  );
};

// == PropTypes

Quotes.propTypes = {
  loadQuotes: PropTypes.func.isRequired,
  quotes: PropTypes.array.isRequired,
  addQuoteFormStatus: PropTypes.bool.isRequired,
  changeAddQuoteFormStatus: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired,
  saveFormHeight: PropTypes.func.isRequired,
  pageQuantity: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
};

// == Export

export default Quotes;
