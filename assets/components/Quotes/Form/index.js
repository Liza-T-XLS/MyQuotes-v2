/* eslint-disable max-len */
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
  quoteFormLabel,
  quoteFormStatus,
  quoteFormHeight,
  quoteText,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  tagInput,
  tags,
  saveTag,
  deleteTag,
  changeQuoteFormField,
  addQuote,
}) => {
  const quoteFormClassName = classNames('quoteForm', { active: quoteFormStatus });
  const quoteFormStyle = {
    height: `${quoteFormHeight}px`,
  };

  const onChangeHandler = (e) => {
    changeQuoteFormField(e.target.value, e.target.name);
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

  const tagDeleteOnClickHandler = (e) => {
    console.log('tag deleted');
    console.log(e.target.previousSibling.textContent);
    const tagName = e.target.previousSibling.textContent;
    deleteTag(tagName);
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
    <form className={quoteFormClassName} style={quoteFormStyle} onKeyDown={formOnKeyDownHandler} onSubmit={onSubmitHandler}>
      <h2>{quoteFormLabel}</h2>
      <label htmlFor="quoteText">
        <span>Text</span>
        <textarea name="quoteText" value={quoteText} onChange={onChangeHandler} id="quoteText" minLength="1" required />
      </label>
      <label htmlFor="authorFirstName">
        <span>Author's first name</span>
        <input className="quoteFormInput" name="authorFirstName" value={authorFirstName} onChange={onChangeHandler} id="authorFirstName" minLength="1" />
      </label>
      <label htmlFor="authorLastName">
        <span>Author's last name</span>
        <input className="quoteFormInput" name="authorLastName" value={authorLastName} onChange={onChangeHandler} id="authorLastName" minLength="1" />
      </label>
      <label htmlFor="character's name">
        <span>Character's last name</span>
        <input className="quoteFormInput" name="characterName" value={characterName} onChange={onChangeHandler} id="character's name" minLength="1" />
      </label>
      <label htmlFor="mediumTitle">
        <span>Medium's title</span>
        <input className="quoteFormInput" name="mediumTitle" value={mediumTitle} onChange={onChangeHandler} id="mediumTitle" minLength="1" />
      </label>
      <label htmlFor="tagInput">
        <span>Tags</span>
        <input className="quoteFormInput" name="tagInput" value={tagInput} onChange={onChangeHandler} onKeyDown={tagOnKeyDownHandler} id="tags" minLength="1" />
        <img className="addTag" src={addTagIcon} alt="add tag icon" onClick={tagOnClickHandler} />
      </label>
      {tags && (
        <div className="tagsToSave">
          {tags.map((tag) => (
            <div key={tags.indexOf(tag)} className="tag">
              <span>{tag}</span>
              <img className="tagDelete" src={deleteTagIcon} alt="delete tag icon" onClick={tagDeleteOnClickHandler} />
            </div>
          ))}
        </div>
      )}
      <button className="quoteSubmitButton" type="submit">Add</button>
    </form>
  );
};

// PropTypes

Form.propTypes = {
  quoteFormLabel: PropTypes.string.isRequired,
  quoteFormStatus: PropTypes.bool.isRequired,
  quoteFormHeight: PropTypes.number.isRequired,
  quoteText: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  mediumTitle: PropTypes.string.isRequired,
  tagInput: PropTypes.string.isRequired,
  tags: PropTypes.array,
  saveTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  changeQuoteFormField: PropTypes.func.isRequired,
  addQuote: PropTypes.func.isRequired,
};

Form.defaultProps = {
  tags: [],
};

// == Export

export default Form;
