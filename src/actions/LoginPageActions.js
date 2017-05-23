import axios from 'axios';

export function getUser(username, password) {
  return function (dispatch) {
    axios.get('http://localhost:3000/api/login/user', {
      params: {
        username,
        password,
      }
    })
      .then((response) => {
        console.log(response.data);
        return dispatch({
          type: 'LOGIN_SUCCESS',
          user: response.data.user,
          pass: response.data.pass,
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

export function setUser(username, password) {
  return function (dispatch) {
    const user = {
      username,
      password
    };
    axios.post('http://localhost:3000/api/register/user', user)
      .then((response) => {
        dispatch({
          type: 'SIGNUP_SUCCESS',
          user: response.data.user,
          pass: response.data.pass,
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
      type: 'CHANGE_USER',
      user,
    });
  };
}

export function onChangePass(pass) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_PASS',
      pass,
    });
  };
}
