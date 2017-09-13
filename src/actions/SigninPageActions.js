import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';
import { notificationAdd } from './NotificationActions';

export function setUser(data) {
  return function (dispatch) {
    const user = {
      username: data.email,
      password: data.password,
    };
    return axios.post(`${API_DOMAIN}/api/register/user`, user)
      .then(() => {
        dispatch(notificationAdd({
          title: 'Registro correcto',
          message: 'usuario registrado correctamente',
          level: 'success',
        }));
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(() => {
        dispatch(notificationAdd({
          title: 'Error al registrarse',
          message: 'intentelo de nuevo más tarde',
          level: 'error',
        }));
        dispatch({ type: 'SIGNUP_FAILED' });
      });
  };
}
