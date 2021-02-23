// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

// == Component

const Search = ({ searchInput, saveSearchInput }) => {
  const onChangeHandler = (e) => {
    console.log('searchOnChangeHandler');
    console.log(e.target.value);
    saveSearchInput(e.target.value);
  };

  return (
    <>
      <label htmlFor="search">
        <fieldset>
          <legend>Find a quote</legend>
          <input className="searchInput" name="search" value={searchInput} onChange={onChangeHandler} id="search" minLength="1" placeholder="e.g. word, author's name etc." />
        </fieldset>
      </label>
    </>
  );
};

// == PropTypes

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  saveSearchInput: PropTypes.func.isRequired,
};

// == Export

export default Search;
