// == Imports

import React from 'react';

import './loader.scss';

// == Component

const Loader = () => (
  <div className="cs-loader">
    <div className="cs-loader-inner">
      <span>●</span>
      <span>●</span>
      <span>●</span>
      <span>●</span>
      <span>●</span>
      <span>●</span>
    </div>
  </div>
);

// == Export

export default Loader;
