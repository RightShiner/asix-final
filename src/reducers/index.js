"use strict"
import {combineReducers} from 'redux';

import {LoginPageReducers} from './LoginPageReducers';
import {SigninPageReducers} from './SigninPageReducers';

export default combineReducers({
  loginPage: LoginPageReducers,
  signinPage: SigninPageReducers,
})