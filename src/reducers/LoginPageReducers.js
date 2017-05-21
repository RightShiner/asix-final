"use strict"

export function LoginPageReducers(state={user:'', pass:''}, action){
  switch(action.type){
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        pass: action.pass,
      };
      break;
    case "LOGIN_FAILED":
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
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.user,
        pass: action.pass,
      };
      break;
    case "SIGNUP_FAILED":
      return {
        ...state,
        user: '',
        pass: '',
      };
      break;
  }
  return state
}