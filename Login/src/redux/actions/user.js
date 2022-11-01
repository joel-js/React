import {  CURR_USER_REQUEST, 
          CURR_USER_SUCCESS,
          CURR_USER_ERROR } from "../types/user"

export const curr_user_request = () => {
  return {
    type  : CURR_USER_REQUEST
  }
}

export const curr_user_success = data => {
  return {
    type      : CURR_USER_SUCCESS,
    payload   : data 
  }
}

export const curr_user_error = () => {
  return {
    type  : CURR_USER_ERROR
  }
}