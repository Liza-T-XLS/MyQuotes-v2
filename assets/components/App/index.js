/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// == Imports

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Footer from '../Footer';
import Signup from '../../containers/Signup';
import Activation from '../../containers/Activation';
import Login from '../../containers/Login';
import PasswordForgotten from '../../containers/PasswordForgotten';
import Quotes from '../../containers/Quotes';
import Settings from '../../containers/Settings';
import NotFound from '../NotFound';
import About from '../About';
import Logout from '../../containers/Logout';

// == Component

const App = ({
  checkIsLogged,
  open,
  setOpen,
}) => {
  useEffect(() => {
    console.log('useEffect: checkIsLogged');
    checkIsLogged();
  },
  []);

  const appRef = useRef(null);

  const filterOnClickHandler = () => {
    setOpen(false);
  };

  return (
    <div className="app" ref={appRef}>
      {open && (
        <div className="filter" onClick={filterOnClickHandler} />
      )}
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
            path="/verify"
          >
            <Activation />
          </Route>
          <Route
            path="/login"
            exact
          >
            <Login />
          </Route>
          <Route
            path="/password-forgotten"
            exact
          >
            <PasswordForgotten timestamp={new Date().toString()} />
          </Route>
          <Route
            path="/quotes"
            exact
          >
            <Quotes ref={appRef} />
          </Route>
          <Route
            path="/settings"
            exact
          >
            <Settings />
          </Route>
          <Route
            path="/about"
            exact
          >
            <About />
          </Route>
          <Route
            path="/logout"
            exact
          >
            <Logout />
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
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

// == Export

export default App;
