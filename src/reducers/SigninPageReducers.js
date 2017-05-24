"use strict"

export function SigninPageReducers(state={user:'', pass:''}, action){
  switch(action.type){
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        pass: action.pass,
      };
      break;
    case "SIGNIN_FAILED":
      return {
        ...state,
        user: '',
        pass: '',
      };
      break;
      case "CHANGE_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "CHANGE_PASS":
      return {
        ...state,
        pass: action.pass,
      };
      break;
  }
  return state
}