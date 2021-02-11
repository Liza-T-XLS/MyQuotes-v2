/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// == Imports

import React, { useRef } from 'react';

import './tags.scss';
import navLeftButton from '../../../images/navigate_before-36dp.svg';
import navRightButton from '../../../images/navigate_next-36dp.svg';

// == Component

const Tags = () => {
  const tagsListRef = useRef(null);
  const buttonOnClickHandler = (e) => {
    console.log(e.target);
    if (e.target.className === 'leftButton') {
      tagsListRef.current.scrollLeft -= 30;
    }
    if (e.target.className === 'rightButton') {
      tagsListRef.current.scrollLeft += 30;
    }
  };

  return (
    <div className="tags">
      <img className="leftButton" src={navLeftButton} alt="tag navigation left button" onClick={buttonOnClickHandler} />
      <div className="tagsList" ref={tagsListRef}>
        <span className="tag">Joy</span>
        <span className="tag">Sadness</span>
        <span className="tag">Politics</span>
        <span className="tag">Television</span>
        <span className="tag">Games</span>
      </div>
      <img className="rightButton" src={navRightButton} alt="tag navigation left button" onClick={buttonOnClickHandler} />
    </div>
  );
};

// == PropTypes

// == Export

export default Tags;
