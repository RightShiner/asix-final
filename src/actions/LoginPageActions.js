import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';

import { notificationAdd } from './NotificationActions';
import * as types from './action-types';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const GET_USERNAME_REQUEST = 'GET_USERNAME_REQUEST';
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS';
export const GET_USERNAME_FAILED = 'GET_USERNAME_FAILED';

export function getUser(data) {
  return function (dispatch) {
    const user = {
      username: data.email,
      password: data.password,
    };
    return axios.post(`${API_DOMAIN}/api/login/user`, user)
      .then((response) => {
        dispatch({ type: 'USER_LOGIN_SUCCESS', id: response.data.id, username: response.data.username });
      })
      .catch(() => {
        dispatch(notificationAdd({
          title: 'Error al iniciar sesión',
          message: 'intentelo de nuevo más tarde',
          level: 'error',
        }));
        dispatch({ type: 'USER_LOGIN_FAILED' });
      });
  };
}

export function getUsername(id) {
  return function (dispatch) {
    dispatch({ type: GET_USERNAME_REQUEST });
    return axios.get(`${API_DOMAIN}/api/user/${id}`)
      .then((response) => {
        dispatch({ type: 'GET_USERNAME_SUCCESS', username: response.data });
      })
      .catch(() => {
        dispatch({ type: 'GET_USERNAME_FAILED' });
      });
  };
}

export function onLogout() {
  return ({ type: types.RESET });
}
