// == Imports

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './header.scss';

// == Component

const Header = ({ saveHeaderHeight }) => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    console.log(headerRef.current.clientHeight);
    const headerHeight = headerRef.current.clientHeight;
    console.log(headerHeight);
    const titleStyle = getComputedStyle(titleRef.current);
    // console.log(titleStyle);
    // console.log(parseInt(style.marginTop));
    // console.log(parseInt(style.marginBottom));
    const totalHeaderHeight = headerHeight + parseInt(titleStyle.marginTop) + parseInt(titleStyle.marginBottom);
    console.log(totalHeaderHeight);
    saveHeaderHeight(totalHeaderHeight);
  }, []);
  return (
    <header ref={headerRef} className="header">
      <h1 ref={titleRef}>
        <Link to="/">MyQuotes</Link>
      </h1>
    </header>
  );
};

// == PropTypes

Header.propTypes = {
  saveHeaderHeight: PropTypes.func.isRequired,
};

// == Export

export default Header;
