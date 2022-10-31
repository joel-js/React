import { call,put } from 'redux-saga/effects';
import { login } from '../actions/login';
import { loginCred } from '../requests/login';

export function* handleLogin(action){
  try{
    
    const res     = yield call(loginCred);
    const {data}  = res;
    console.log(data)
    yield put(login(data)) 

  } catch(error){
    console.log(error);
  }
}