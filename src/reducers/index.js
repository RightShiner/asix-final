import { combineReducers } from 'redux';

import { LoginPageReducers } from './LoginPageReducers';

export default combineReducers({
  loginPage: LoginPageReducers,
});
