import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { notificationReducer } from './notificationReducer';

export default combineReducers({
  userState: userReducer,
  notificationReducer,
});

