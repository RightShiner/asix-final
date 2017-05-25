export function SigninPageReducers(state = { user:'', pass:'' }, action) {
  switch (action.type) {
  case 'SIGNIN_SUCCESS':
    return {
      ...state,
      user: action.user,
      pass: action.pass,
    };
  case 'SIGNIN_FAILED':
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
  default: return state;
  }
}
