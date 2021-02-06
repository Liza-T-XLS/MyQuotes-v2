/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// == Imports

import React, { useState } from 'react';
import classNames from 'classnames';

import './nav.scss';

// == Component

const Nav = () => {
  const [open, setOpen] = useState(false);

  const burgerCSS = classNames('burger', { active: open });
  const burgerOnClickHandler = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav">
      <div className={burgerCSS} onClick={burgerOnClickHandler}>
        <span />
      </div>
    </nav>
  );
};

// == Export

export default Nav;
