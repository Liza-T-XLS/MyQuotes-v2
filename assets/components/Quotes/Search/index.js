// == Imports

import React from 'react';

import './search.scss';

// == Component

const Search = () => {
  return (
    <>
      <label htmlFor="search">
        <fieldset>
          <legend>Find a quote</legend>
          <input className="searchInput" name="search" id="search" minLength="1" placeholder="e.g. word, author's name etc." />
        </fieldset>
      </label>
    </>
  );
};

// == PropTypes

// == Export

export default Search;
