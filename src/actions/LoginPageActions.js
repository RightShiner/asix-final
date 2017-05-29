import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';

import { notificationAdd } from './NotificationActions';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export function getUser(data) {
  return function (dispatch) {
    const user = {
      username: data.email,
      password: data.password,
    };
    axios.post(`${API_DOMAIN}/api/login/user`, user)
      .then(() => {
        dispatch({ type: 'USER_LOGIN_SUCCESS' });
      })
      .catch(() => {
        dispatch(notificationAdd({
          title: 'Error al iniciar sesión',
          message: 'intentelo de nuevo más tarde',
          level: 'error',
        }));
        return dispatch({ type: 'USER_LOGIN_FAILED' });
      });
  };
}
