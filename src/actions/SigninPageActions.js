import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';

export function setUser(data) {
  return function (dispatch) {
    const user = {
      username: data.email,
      password: data.password,
    };
    return axios.post(`${API_DOMAIN}/api/register/user`, user)
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(() => {
        dispatch({ type: 'SIGNUP_FAILED' });
      });
  };
}
