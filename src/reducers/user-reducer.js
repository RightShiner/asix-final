import * as types from 'actions/action-types';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from '../actions/LoginPageActions';

const initialState = {
  id: null,
  username: '',
  email: '',
  error: '',
  isLogged: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
  case USER_LOGIN_SUCCESS:
    return {
      ...state,
      id: action.id,
      username: action.username,
      email: action.username,
      isLogged: true,
    };
  case USER_LOGIN_FAILED:
    return { ...initialState };
  case types.RESET:
    return { ...initialState };
  default:
    return state;
  }
}
