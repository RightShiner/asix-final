import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import store from './store';

import LoginPage from './containers/LoginPage';
import SigninPage from './containers/SigninPage';
import Main from './main';

const Routes = (
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={Main}>
        	<Route path="login" component={LoginPage} />
        	<Route path="signin" component={SigninPage} />
        </Route>
      </Router>
  </Provider>
);

render(
  Routes, document.getElementById('app')
);
