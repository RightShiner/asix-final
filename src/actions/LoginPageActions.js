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
    axios.post(`${API_DOMAIN}/api/login/user`, user)
      .then(() => {
        dispatch({
          type: 'LOGIN_SUCCESS',
        });
      })
      .catch((error) => {
        dispatch({
          type: 'LOGIN_FAILED',
          payload: error.response.data,
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
