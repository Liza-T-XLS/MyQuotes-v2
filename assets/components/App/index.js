// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import './app.scss';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Footer from '../Footer';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import Quotes from '../../containers/Quotes';
import NotFound from '../NotFound';

// == Component

const App = ({ checkIsLogged, isLogged }) => {
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
          <Route
            path="/quotes"
            exact
          >
            {!isLogged ? <Redirect to="/" /> : <Quotes />}
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
  isLogged: PropTypes.bool.isRequired,
};

// == Export

export default App;
