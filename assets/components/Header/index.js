/* eslint-disable radix */

// == Imports

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Nav from '../../containers/Header/Nav';

import './header.scss';

// == Component

const Header = ({ saveHeaderHeight }) => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const titleStyle = getComputedStyle(titleRef.current);
    const totalHeaderHeight = headerHeight + parseInt(titleStyle.marginTop) + parseInt(titleStyle.marginBottom);
    saveHeaderHeight(totalHeaderHeight);
  }, []);
  return (
    <header ref={headerRef} className="header">
      <h1 ref={titleRef}>
        <Link to="/">MyQuotes</Link>
      </h1>
      <Nav />
    </header>
  );
};

// == PropTypes

Header.propTypes = {
  saveHeaderHeight: PropTypes.func.isRequired,
};

// == Export

export default Header;
