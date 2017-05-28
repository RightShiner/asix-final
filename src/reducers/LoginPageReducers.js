const initialState = {
  user: '',
  pass: '',
  failed: false,
  error: '',
};

export function LoginPageReducers(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
    };
  case 'LOGIN_FAILED':
    return {
      ...state,
      user: '',
      pass: '',
      failed: action.failed,
      error: action.payload,
    };
  case 'LOGIN_CHANGE_USER':
    return {
      ...state,
      user: action.user,
      failed: action.failed,
      error: '',
    };
  case 'LOGIN_CHANGE_PASS':
    return {
      ...state,
      pass: action.pass,
      failed: action.failed,
      error: '',
    };
  case 'LOGIN_RESET':
    return {
      ...initialState,
    };
  default: return state;
  }
}
