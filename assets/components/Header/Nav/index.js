/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// == Imports

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';
import homeIcon from '../../../images/home.svg';
import loginIcon from '../../../images/login-36dp.svg';
import signupIcon from '../../../images/signup.svg';
import aboutIcon from '../../../images/about-36dp.svg';
import logoutIcon from '../../../images/logout-36dp.svg';

// == Component

const Nav = ({
  open,
  setOpen,
  isLogged,
  logOut,
}) => {
  const burgerCSS = classNames('burger', { active: open });
  const navCSS = classNames('nav', { active: open });

  const burgerOnClickHandler = () => {
    setOpen(!open);
  };

  const logOutOnClickHandler = () => {
    burgerOnClickHandler();
    logOut();
  };

  return (
    <nav className={navCSS}>
      <div className={burgerCSS} onClick={burgerOnClickHandler}>
        <span />
      </div>
      <div className="menu">
        <ul className="options">
          <li className="option">
            <img src={homeIcon} alt="menu home icon" className="menuIcon" />
            <Link to="/" onClick={burgerOnClickHandler} className="link">Home</Link>
          </li>
          {!isLogged && (
            <>
              <li className="option">
                <img src={loginIcon} alt="menu login icon" className="menuIcon" />
                <Link to="/login" onClick={burgerOnClickHandler} className="link">Log in</Link>
              </li>
              <li className="option">
                <img src={signupIcon} alt="menu signup icon" className="menuIcon" />
                <Link to="/signup" onClick={burgerOnClickHandler} className="link">Sign up</Link>
              </li>
            </>
          )}
          <li className="option">
            <img src={aboutIcon} alt="menu about icon" className="menuIcon" />
            <a href="/">About</a>
          </li>
          {isLogged && (
            <li className="option">
              <img src={logoutIcon} alt="menu logout icon" className="menuIcon" />
              <Link to="/" onClick={logOutOnClickHandler} className="link">Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

// == PropTypes

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

// == Export

export default Nav;
