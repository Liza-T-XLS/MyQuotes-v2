// == Imports

import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';
import footerImg from '../../images/random_thoughts.svg';

// == Component

const Footer = () => (
  <footer className="footer">
    <img className="footerImg" src={footerImg} alt="" />
    <p>
      &copy; 2021 -&nbsp;
      <a href="https://liza-t-xls.netlify.app/index-eng.html" title="Liza-t-xls" target="_blank" rel="noopener noreferrer">
        Liza-T-XLS
      </a>
      <br />
      <br />
      <Link to="/about">About</Link>
    </p>
  </footer>
);

// == Export

export default Footer;
