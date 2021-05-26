/* eslint-disable max-len */
// ==  Imports

import React from 'react';
import { Helmet } from 'react-helmet';

import './help.scss';
import aboutImg from '../../images/reading.svg';

// == Component

const Help = () => (
  <div className="help">
    <Helmet>
      <title>MyQuotes | Help</title>
    </Helmet>
    <h2>Help</h2>
    <p className="helpText">
      MyQuotes is fairly easy to use but here are some tips:
      <br />
      <br />
      When you are on your quotes space:
      <br />
      <br />
      - You can unroll a long quote with the Show Full Text Icon (v) in the bottom right corner of the quote
      <br />
      - By clicking on the icon again, you can hide the text
      <br />
      - By clicking the Copy Icon on the right, you can quickly copy the quote to your clipboard
      <br />
      - Click on the quote&apos;s text to open or close the quote&apos;s details
      <br />
      - You can edit the quote or delete it by clicking on the corresponding icons
      <br />
      - To add a new quote, click on the Add Icon (+) in the top right corner of the page
      <br />
      - You can find one or several quotes by using the Search Box at the top of the page
      <br />
      - or by selecting a tag in your Tag List
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

export default Help;
