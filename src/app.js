"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import store from './store';

import LoginPage from './containers/LoginPage';
import Main from './main';

const middleware = applyMiddleware(thunk, logger);

const Routes = (
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={LoginPage} />
        </Route>
      </Router>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);
