/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// == Imports

import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './nav.scss';

// == Component

const Nav = () => {
  const [open, setOpen] = useState(false);

  const burgerCSS = classNames('burger', { active: open });
  const navCSS = classNames('nav', { active: open });

  const burgerOnClickHandler = () => {
    setOpen(!open);
  };

  const optionOnClickHandler = () => {
    setOpen(!open);
  };

  return (
    <nav className={navCSS}>
      <div className={burgerCSS} onClick={burgerOnClickHandler}>
        <span />
      </div>
      <div className="menu">
        <ul className="options">
          <li className="option"><Link to="/" onClick={optionOnClickHandler}>Home</Link></li>
          <li className="option"><Link to="/login" onClick={optionOnClickHandler}>Log in</Link></li>
          <li className="option"><Link to="/signup" onClick={optionOnClickHandler}>Sign up</Link></li>
          <li className="option">About</li>
        </ul>
      </div>
    </nav>
  );
};

// == Export

export default Nav;
