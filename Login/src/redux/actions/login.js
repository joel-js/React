import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../types';

export const login_request = () => {
  return {
    type  : LOGIN_REQUEST
  }
}

export const login_success = () => {
  return {
    type  : LOGIN_SUCCESS
  }
}

export const login_error = () => {
  return {
    type  : LOGIN_ERROR
  }
}



