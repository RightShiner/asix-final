import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import store from './store';

import LoginPage from './containers/LoginPage';
import Signin from './containers/SigninPage';
import Main from './main';

const Routes = (
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={LoginPage} />
          <Route path="/signin" component={Signin} />
        </Route>
      </Router>
  </Provider>
);

render(
  Routes, document.getElementById('app')
);
