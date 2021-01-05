// == Imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.css';
import App from './components/App';
    
// == Component

const rootReactElement = (
      <Router>
        <App />
      </Router>
  );
  
  const target = document.getElementById('root');
  
  render(rootReactElement, target);

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application
// import './bootstrap';
