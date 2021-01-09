// == Imports

import React from 'react';

import './app.scss';

import { Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Signup from '../../containers/Signup';
import Login from '../Login';

// == Component

const App = () => (
  <div className="app">
    <Header />
    <Route
      path="/"
      exact
    >
      <Home />
    </Route>
    <Route
      path="/sign-up"
      exact
    >
      <Signup />
    </Route>
    <Route
      path="/login"
      exact
    >
      <Login />
    </Route>
    <Footer />
  </div>
);

// == Export

export default App;
