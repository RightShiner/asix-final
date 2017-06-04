import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { notificationReducer } from './notificationReducer';
import { publicationReducer } from './PublicationPageReducer';

export default combineReducers({
  userState: userReducer,
  notificationReducer,
  publicationState: publicationReducer,
});

