import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/scss/font-awesome.scss';

import store from './store';

import LoginPage from './containers/LoginPage';
import SigninPage from './containers/SigninPage';
import HomePage from './containers/HomePage';
import Main from './main';

const Routes = (
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/login" component={LoginPage} />
        </Route>
      </Router>
  </Provider>
);

render(
  Routes, document.getElementById('app')
);
