// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './form.scss';

// == Component

const Form = ({
  addQuoteFormStatus,
  addQuoteFormHeight,
  quoteText,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  changeAddQuoteFormField,
  addQuote,
}) => {
  const addQuoteFormClassName = classNames('addQuoteForm', { active: addQuoteFormStatus });
  const addQuoteFormStyle = {
    height: `${addQuoteFormHeight}px`,
  };

  const onChangeHandler = (e) => {
    changeAddQuoteFormField(e.target.value, e.target.name);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
    addQuote();
  };
  return (
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
      <label htmlFor="tags">
        <span>Tags</span>
        <input className="addQuoteFormInput" name="tags" id="tags" minLength="1" />
      </label>
      <button className="addQuoteSubmitButton" type="submit">Add</button>
    </form>
  );
};

// PropTypes

Form.propTypes = {
  addQuoteFormStatus: PropTypes.bool.isRequired,
  addQuoteFormHeight: PropTypes.number.isRequired,
  quoteText: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  mediumTitle: PropTypes.string.isRequired,
  changeAddQuoteFormField: PropTypes.func.isRequired,
  addQuote: PropTypes.func.isRequired,
};

// == Export

export default Form;
