import { takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../types/login'
import { call,put } from 'redux-saga/effects';
import { login_success } from '../actions/login';
import { loginCred } from '../requests/login';

function* handleLogin(action){
  try{
    
    const res     = yield call(loginCred);
    const {data}  = res;
    yield put(login_success(data)) 
    
  } catch(error){
    console.log(error);
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin)
}