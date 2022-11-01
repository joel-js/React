import { takeLatest } from 'redux-saga/effects';
import { handleLogin } from '../handlers/login';
import { LOGIN_REQUEST } from '../types';

export function* watcherSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin)
}