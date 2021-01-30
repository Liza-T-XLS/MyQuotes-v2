/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './form.scss';
import addTagIcon from '../../../images/addTag-32.png';
import deleteTagIcon from '../../../images/close-thin-18dp.svg';

// == Component

const Form = ({
  addQuoteFormStatus,
  addQuoteFormHeight,
  quoteText,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  tagInput,
  tags,
  saveTag,
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

  const tagOnKeyDownHandler = (e) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && tagInput.length > 0) {
      console.log(e.code);
      saveTag(tagInput);
    }
  };

  const tagOnClickHandler = () => {
    console.log('onClickHandler');
    if (tagInput.length > 0) {
      saveTag(tagInput);
    }
  };

  const formOnKeyDownHandler = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
    }
  };

  const onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    console.log('submitted');
    addQuote();
  };

  return (
    <form className={addQuoteFormClassName} style={addQuoteFormStyle} onKeyDown={formOnKeyDownHandler} onSubmit={onSubmitHandler}>
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
      <label htmlFor="tagInput">
        <span>Tags</span>
        <input className="addQuoteFormInput" name="tagInput" value={tagInput} onChange={onChangeHandler} onKeyDown={tagOnKeyDownHandler} id="tags" minLength="1" />
        <img className="addTag" src={addTagIcon} alt="add tag icon" onClick={tagOnClickHandler} />
      </label>
      {tags && (
        <div className="tagsToSave">
          {tags.map((tag) => (
            <div key={tags.indexOf(tag)} className="tag">
              <span>{tag}</span>
              <img className="tagDelete" src={deleteTagIcon} alt="delete tag icon" />
            </div>
          ))}
        </div>
      )}
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
  tagInput: PropTypes.string.isRequired,
  tags: PropTypes.array,
  saveTag: PropTypes.func.isRequired,
  changeAddQuoteFormField: PropTypes.func.isRequired,
  addQuote: PropTypes.func.isRequired,
};

Form.defaultProps = {
  tags: [],
};

// == Export

export default Form;
