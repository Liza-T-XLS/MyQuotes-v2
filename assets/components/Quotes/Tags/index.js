/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// == Imports

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './tags.scss';
import navLeftButton from '../../../images/navigate_before-36dp.svg';
import navRightButton from '../../../images/navigate_next-36dp.svg';
import unselectTagIcon from '../../../images/close-thin-18dp.svg';

// == Component

const Tags = ({
  loadTags,
  userTags,
  saveSelectedTag,
  loadQuotes,
  selectedTag,
}) => {
  useEffect(() => {
    console.log('useEffect: tags');
    loadTags();
  }, []);

  const tagsListRef = useRef(null);

  const buttonOnClickHandler = (e) => {
    const tagsListRefWidth = tagsListRef.current.offsetWidth;
    if (e.target.className === 'leftButton') {
      tagsListRef.current.scrollLeft -= tagsListRefWidth;
    }
    if (e.target.className === 'rightButton') {
      tagsListRef.current.scrollLeft += tagsListRefWidth;
    }
  };

  const tagOnClickHandler = (e) => {
    console.log(e.target);
    saveSelectedTag(e.target.id);
    loadQuotes();
  };

  const tagUnselectOnClickHandler = () => {
    console.log('tag unselected');
    saveSelectedTag('');
    loadQuotes();
  };

  return (
    <div className="tags">
      <img className="leftButton" src={navLeftButton} alt="tag navigation left button" onClick={buttonOnClickHandler} />
      <div className="tagsList" ref={tagsListRef}>
        {userTags.map((userTag) => {
          const tagCSS = classNames('tag', { active: userTag.id === selectedTag });
          return (
            <div key={userTag.id} className={tagCSS}>
              <span id={userTag.id} role="button" tabIndex="0" onClick={tagOnClickHandler}>{userTag.name}</span>
              {selectedTag === userTag.id && (
                <img className="tagUnselect" src={unselectTagIcon} alt="unselect tag icon" onClick={tagUnselectOnClickHandler} />
              )}
            </div>
          );
        })}
      </div>
      <img className="rightButton" src={navRightButton} alt="tag navigation left button" onClick={buttonOnClickHandler} />
    </div>
  );
};

// == PropTypes

Tags.propTypes = {
  loadTags: PropTypes.func.isRequired,
  userTags: PropTypes.array.isRequired,
  saveSelectedTag: PropTypes.func.isRequired,
  loadQuotes: PropTypes.func.isRequired,
  selectedTag: PropTypes.number.isRequired,
};

// == Export

export default Tags;
