/* eslint-disable react/jsx-one-expression-per-line */

// ==  Imports

import React from 'react';
import { Helmet } from 'react-helmet';

import './about.scss';
import aboutImg from '../../images/reading.svg';

// == Component

const About = () => (
  <div className="about">
    <Helmet>
      <title>MyQuotes | About</title>
    </Helmet>
    <h2>About</h2>
    <p className="aboutText">
      Hello,
      <br />
      <br />
      I built this website for my personal use and for training purposes.<br />
      I wanted to be able to save any quotes, including the less famous ones, a sentence you would hear at a family dinner or in a TV show, anything you deem worth remembering.
      <br />
      If you like it, please check out my online <a href="https://liza-t-xls.netlify.app/index-eng.html" title="Liza-t-xls" target="_blank" rel="noopener noreferrer">résumé</a> :)
      <br />
      <br />
      Enjoy!
    </p>
    <div className="aboutImgDiv">
      <img className="aboutImg" src={aboutImg} alt="" />
    </div>
  </div>
);

// == Export

export default About;
