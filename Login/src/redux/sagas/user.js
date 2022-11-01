import { takeLatest } from 'redux-saga/effects';
import { CURR_USER_REQUEST } from '../types/user'
import { call,put } from 'redux-saga/effects';
import { curr_user_success } from '../actions/user';
import { userData } from '../requests/user';

function* handleUserData(action){
  try{

    const res     = yield call(userData)
    const {data}  = res;
    yield put(curr_user_success(data))
  }catch(error){
    console.log(error)
  }
}

export function* userSaga(){
  yield takeLatest(CURR_USER_REQUEST, handleUserData)
}