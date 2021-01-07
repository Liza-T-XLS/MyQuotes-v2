// == Imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import App from './components/App';

// == Component

const rootReactElement = (
  <Router>
    <App />
  </Router>
);

const target = document.getElementById('root');

render(rootReactElement, target);
