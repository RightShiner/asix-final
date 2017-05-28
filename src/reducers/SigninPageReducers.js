const initialState = {
  user: '',
  pass: '',
  failed: false,
  error: '',
};

export function SigninPageReducers(state = initialState, action) {
  switch (action.type) {
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
      failed: action.failed,
      error: action.payload,
    };
  case 'SIGNUP_CHANGE_USER':
    return {
      ...state,
      user: action.user,
      failed: action.failed,
      error: '',
    };
  case 'SIGNUP_CHANGE_PASS':
    return {
      ...state,
      pass: action.pass,
      failed: action.failed,
      error: '',
    };
  case 'SIGNUP_RESET':
    return {
      ...initialState,
    };
  default: return state;
  }
}
