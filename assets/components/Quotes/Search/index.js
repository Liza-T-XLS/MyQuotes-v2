/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';
import resetSearchIcon from '../../../images/close-thin-18dp.svg';

// == Component

const Search = ({
  searchInput,
  saveSearchInput,
  loadQuotes,
  saveCurrentPage,
  clearSearchInput,
}) => {
  const onChangeHandler = (e) => {
    saveSearchInput(e.target.value);
    saveCurrentPage(1);
    loadQuotes();
  };

  const resetSearchOnClickHandler = (e) => {
    if (e.target.previousSibling.value !== '') {
      clearSearchInput();
      saveCurrentPage(1);
      loadQuotes();
    }
  };

  return (
    <>
      <label className="searchLabel" htmlFor="search">
        <fieldset>
          <legend>Find a quote</legend>
          <div className="inputDiv">
            <input className="searchInput" name="search" value={searchInput} onChange={onChangeHandler} id="search" minLength="1" placeholder="e.g. word, author's name etc." />
            <img className="resetSearch" src={resetSearchIcon} alt="reset search icon" title="reset search" onClick={resetSearchOnClickHandler} />
          </div>
        </fieldset>
      </label>
    </>
  );
};

// == PropTypes

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  saveSearchInput: PropTypes.func.isRequired,
  loadQuotes: PropTypes.func.isRequired,
  saveCurrentPage: PropTypes.func.isRequired,
  clearSearchInput: PropTypes.func.isRequired,
};

// == Export

export default Search;
