// == Imports

import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

// == Component

const Header = () => (
  <header className="header">
    <h1>
      <Link to="/">MyQuotes</Link>
    </h1>
  </header>
);

// == Export

export default Header;
