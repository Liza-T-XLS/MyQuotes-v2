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
import addQuoteIcon from '../../images/addQuote-36dp.svg';

import Quote from '../../containers/Quotes/Quote';
import Form from '../../containers/Quotes/Form';
import Search from '../../containers/Quotes/Search';
import Tags from '../../containers/Quotes/Tags';

// == Component

const Quotes = ({
  loadQuotes,
  quotes,
  quoteFormStatus,
  changeQuoteFormStatus,
  headerHeight,
  saveFormHeight,
  clearQuoteForm,
  quoteId,
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
  const quotesMenuFirstLevelRef = useRef(null);

  const onClickHandler = () => {
    console.log('addQuote icon clicked');
    const formHeight = window.innerHeight - headerHeight - quotesMenuFirstLevelRef.current.clientHeight;
    if (!quoteFormStatus) {
      saveFormHeight(formHeight);
    } else {
      saveFormHeight(1);
      if (quoteId) {
        clearQuoteForm();
      }
    }
    changeQuoteFormStatus();
  };

  const pageChangeHandler = (e, value) => {
    saveCurrentPage(value);
    loadQuotes();
  };

  const addQuoteIconClassName = classNames('addQuoteIcon', { active: quoteFormStatus });

  return (
    <div className="quotes" ref={quotesDivRef}>
      <Helmet>
        <title>MyQuotes | Board</title>
      </Helmet>
      <div className="quotesMenu" ref={quotesMenuRef}>
        <div className="firstLevel" ref={quotesMenuFirstLevelRef}>
          <Search />
          <img className={addQuoteIconClassName} src={addQuoteIcon} alt="add quote icon" onClick={onClickHandler} />
        </div>
        <Tags />
      </div>
      <div className="quotesList" ref={quotesListRef}>
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} ref={quotesListRef} displayFormOnClickHandler={onClickHandler} />
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
  quoteFormStatus: PropTypes.bool.isRequired,
  changeQuoteFormStatus: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired,
  saveFormHeight: PropTypes.func.isRequired,
  clearQuoteForm: PropTypes.func.isRequired,
  quoteId: PropTypes.number.isRequired,
  pageQuantity: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
};

// == Export

export default Quotes;
