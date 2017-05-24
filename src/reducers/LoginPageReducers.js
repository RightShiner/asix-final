export function LoginPageReducers(state = { user:'', pass:'' }, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      user: action.user,
      pass: action.pass,
    };
  case 'LOGIN_FAILED':
    return {
      ...state,
      user: '',
      pass: '',
    };
  case 'CHANGE_USER':
    return {
      ...state,
      user: action.user,
    };
  case 'CHANGE_PASS':
    return {
      ...state,
      pass: action.pass,
    };
  case 'SIGNUP_SUCCESS':
    return {
      ...state,
      user: action.user,
      pass: action.pass,
    };
  case 'SIGNUP_FAILED':
    return {
      ...state,
      user: '',
      pass: '',
    };
  default: return state;
  }
}
