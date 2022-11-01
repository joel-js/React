import {createStore} from 'redux'
import reducer from './reducers/root';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware } from 'redux';
import  rootSaga  from './sagas/root';

const sagaMiddleware = createSagaMiddleware()
const middleware     = [sagaMiddleware]

const store = createStore(reducer,{},applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga)
export default store;