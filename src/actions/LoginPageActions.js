import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';
import trim from 'lodash/trim';
import isEmpty from 'lodash/isEmpty';

export function getUser(username, password) {
  if (isEmpty(trim(username)) || isEmpty(trim(password))) {
    return {
      type: 'LOGIN_FAILED',
      payload: 'campos vacios',
      failed: true
    };
  }

  return function (dispatch) {
    const user = {
      username,
      password
    };
    axios.get(`${API_DOMAIN}/api/login/user`, user)
      .then((response) => {
        if ('error' === response.data) {
          return dispatch({
            type: 'LOGIN_FAILED',
            payload: 'Login incorrecto',
            failed: true
          });
        }
        return dispatch({
          type: 'LOGIN_SUCCESS',
          user: response.data.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_FAILED',
          payload: err,
        });
      });
  };
}

export function onChangeUser(user) {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_CHANGE_USER',
      failed: false,
      user,
    });
  };
}

export function onChangePass(pass) {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_CHANGE_PASS',
      failed: false,
      pass,
    });
  };
}

export function reset() {
  return { type: 'LOGIN_RESET' };
}
