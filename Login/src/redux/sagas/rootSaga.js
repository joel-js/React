import { takeLatest } from 'redux-saga/effects';
import { handleLogin } from '../handlers/login';
import { LOGIN } from '../types';

export function* watcherSaga() {
  yield takeLatest(LOGIN, handleLogin)
}