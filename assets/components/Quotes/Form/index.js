/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */

// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './form.scss';
import addTagIcon from '../../../images/addTag-36dp.svg';
import deleteTagIcon from '../../../images/close-thin-18dp.svg';

// == Component

const Form = ({
  quoteFormTitleLabel,
  quoteFormButtonLabel,
  quoteFormStatus,
  quoteFormHeight,
  quoteText,
  authorFirstName,
  authorLastName,
  characterName,
  mediumTitle,
  tagInput,
  tags,
  saveFormTag,
  deleteFormTag,
  changeQuoteFormField,
  addQuote,
  quoteId,
  editQuote,
  formErrors,
  checkQuoteFormErrors,
  clearTagInput,
}) => {
  const quoteFormClassName = classNames('quoteForm', { active: quoteFormStatus });

  const authorFirstNameLabelClassName = classNames('formLabel', { authorFirstNameLabel: formErrors.authorFirstName.length > 0 && quoteFormHeight < 700 });
  const authorLastNameLabelClassName = classNames('formLabel', { authorLastNameLabel: formErrors.authorLastName.length > 0 && quoteFormHeight < 700 });
  const characterNameLabelClassName = classNames('formLabel', { characterNameLabel: formErrors.characterName.length > 0 && quoteFormHeight < 700 });
  const mediumTitleLabelClassName = classNames('formLabel', { mediumTitleLabel: formErrors.mediumTitle.length > 0 && quoteFormHeight < 700 });
  const tagInputLabelClassName = classNames('formLabel', { tagInputLabel: formErrors.tagInput.length > 0 && quoteFormHeight < 700 });

  // custom z-index required despite form being closed, else (white) inputs are still displayed above (black) footer
  let quoteFormZindex;
  if (quoteFormHeight > 1) {
    quoteFormZindex = 2;
  } else {
    quoteFormZindex = 0;
  }

  // adapting form height and z-index depending on the form being displayed or not
  const quoteFormStyle = {
    height: `${quoteFormHeight}px`,
    zIndex: quoteFormZindex,
  };

  const onChangeHandler = (e) => {
    changeQuoteFormField(e.target.value, e.target.name);
    checkQuoteFormErrors(e.target.name);
  };

  const createTag = () => {
    checkQuoteFormErrors('tagInput');
    const error = formErrors.tagInput;
    if (error === '') {
      saveFormTag(tagInput.trim());
    }
  };

  const tagOnKeyDownHandler = (e) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && tagInput.trim().length > 0) {
      createTag();
    }
  };

  const tagOnClickHandler = () => {
    if (tagInput.trim().length > 0) {
      createTag();
    }
  };

  const tagDeleteOnClickHandler = (e) => {
    const tagName = e.target.previousSibling.textContent;
    deleteFormTag(tagName);
  };

  const formOnKeyDownHandler = (e) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && e.target.type !== 'textarea') {
      e.preventDefault();
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    clearTagInput();
    checkQuoteFormErrors('quoteText');
    checkQuoteFormErrors('authorFirstName');
    checkQuoteFormErrors('authorLastName');
    checkQuoteFormErrors('characterName');
    checkQuoteFormErrors('mediumTitle');
    const errors = Object.values(formErrors).find((value) => value.length > 0);
    if (errors === undefined && quoteText !== '') {
      if (quoteId) {
        editQuote();
      } else {
        addQuote();
      }
    }
  };

  return (
    <form className={quoteFormClassName} style={quoteFormStyle} onKeyDown={formOnKeyDownHandler} onSubmit={onSubmitHandler}>
      <h2>{quoteFormTitleLabel}</h2>
      <label className="formLabel" htmlFor="quoteText">
        <span>Text</span>
        <textarea name="quoteText" value={quoteText} onChange={onChangeHandler} id="quoteText" minLength="1" required />
        <div className="errorMsg">{formErrors.quoteText.length > 0 && <span>{formErrors.quoteText}</span>}</div>
      </label>
      <label className={authorFirstNameLabelClassName} htmlFor="authorFirstName">
        <span>Author&apos;s first name</span>
        <input className="quoteFormInput" name="authorFirstName" value={authorFirstName} onChange={onChangeHandler} id="authorFirstName" minLength="1" />
        <div className="errorMsg">{formErrors.authorFirstName.length > 0 && <span>{formErrors.authorFirstName}</span>}</div>
      </label>
      <label className={authorLastNameLabelClassName} htmlFor="authorLastName">
        <span>Author&apos;s last name</span>
        <input className="quoteFormInput" name="authorLastName" value={authorLastName} onChange={onChangeHandler} id="authorLastName" minLength="1" />
        <div className="errorMsg">{formErrors.authorLastName.length > 0 && <span>{formErrors.authorLastName}</span>}</div>
      </label>
      <label className={characterNameLabelClassName} htmlFor="character's name">
        <span>Character&apos;s last name</span>
        <input className="quoteFormInput" name="characterName" value={characterName} onChange={onChangeHandler} id="character's name" minLength="1" />
        <div className="errorMsg">{formErrors.characterName.length > 0 && <span>{formErrors.characterName}</span>}</div>
      </label>
      <label className={mediumTitleLabelClassName} htmlFor="mediumTitle">
        <span>Medium&apos;s title</span>
        <input className="quoteFormInput" name="mediumTitle" value={mediumTitle} onChange={onChangeHandler} id="mediumTitle" minLength="1" />
        <div className="errorMsg">{formErrors.mediumTitle.length > 0 && <span>{formErrors.mediumTitle}</span>}</div>
      </label>
      <label className={tagInputLabelClassName} htmlFor="tagInput">
        <span>Tags</span>
        <input className="quoteFormInput" name="tagInput" value={tagInput} onChange={onChangeHandler} onKeyDown={tagOnKeyDownHandler} id="tags" minLength="1" />
        <img className="addTag" src={addTagIcon} alt="add tag icon" title="add tag" onClick={tagOnClickHandler} />
        <div className="errorMsg">{formErrors.tagInput.length > 0 && <span>{formErrors.tagInput}</span>}</div>
      </label>
      {tags && (
        <div className="tagsToSave">
          {tags.map((tag) => (
            <div key={tags.indexOf(tag)} className="tag">
              <span>{tag}</span>
              <img className="tagDelete" src={deleteTagIcon} alt="delete tag icon" onClick={tagDeleteOnClickHandler} />
            </div>
          ))}
          <div className="errorMsg">{formErrors.tags.length > 0 && <span>{formErrors.tags}</span>}</div>
        </div>
      )}
      <button className="quoteSubmitButton" type="submit">{quoteFormButtonLabel}</button>
    </form>
  );
};

// PropTypes

Form.propTypes = {
  quoteFormTitleLabel: PropTypes.string.isRequired,
  quoteFormButtonLabel: PropTypes.string.isRequired,
  quoteFormStatus: PropTypes.bool.isRequired,
  quoteFormHeight: PropTypes.number.isRequired,
  quoteText: PropTypes.string.isRequired,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  mediumTitle: PropTypes.string.isRequired,
  tagInput: PropTypes.string.isRequired,
  tags: PropTypes.array,
  saveFormTag: PropTypes.func.isRequired,
  deleteFormTag: PropTypes.func.isRequired,
  changeQuoteFormField: PropTypes.func.isRequired,
  addQuote: PropTypes.func.isRequired,
  quoteId: PropTypes.number.isRequired,
  editQuote: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    quoteText: PropTypes.string.isRequired,
    authorFirstName: PropTypes.string.isRequired,
    authorLastName: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    mediumTitle: PropTypes.string.isRequired,
    tagInput: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  checkQuoteFormErrors: PropTypes.func.isRequired,
  clearTagInput: PropTypes.func.isRequired,
};

Form.defaultProps = {
  tags: [],
};

// == Export

export default Form;
