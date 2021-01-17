// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from '../Header';
import Home from '../../containers/Home';
import Footer from '../Footer';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import NotFound from '../NotFound';

// == Component

const App = ({ checkIsLogged }) => {
  useEffect(() => {
    console.log('useEffect: checkIsLogged');
    checkIsLogged();
  },
  []);
  return (
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route
            path="/"
            exact
          >
            <Home />
          </Route>
          <Route
            path="/signup"
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
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

// == PropTypes

App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
};

// == Export

export default App;
