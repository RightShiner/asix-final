import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';
import { hashHistory } from 'react-router';
import trim from 'lodash/trim';
import isEmpty from 'lodash/isEmpty';
import httpConfig from '../helpers/httpConfig';

export function setUser(username, password) {
  if (isEmpty(trim(username)) || isEmpty(trim(password))) {
    return {
      type: 'SIGNUP_FAILED',
      payload: 'campos vacios',
      failed: true,
    };
  }
  return function (dispatch) {
    axios.post(
      `${API_DOMAIN}/api/register/user`,
      httpConfig({
        username,
        password
      }))
      .then(() => {
        hashHistory.push('/login');
        return dispatch({
          type: 'SIGNUP_SUCCESS',
          user: '',
          pass: ''
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SIGNUP_FAILED',
          payload: err,
        });
      });
  };
}

export function onChangeUser(user) {
  return (dispatch) => {
    dispatch({
      type: 'SIGNUP_CHANGE_USER',
      failed: false,
      user,
    });
  };
}

export function onChangePass(pass) {
  return (dispatch) => {
    dispatch({
      type: 'SIGNUP_CHANGE_PASS',
      failed: false,
      pass,
    });
  };
}

export function reset() {
  return { type: 'SIGNUP_RESET' };
}
