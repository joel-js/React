import {createStore} from 'redux'
import reducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware } from 'redux';
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const middleware     = [sagaMiddleware]

const store = createStore(reducer,{},applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga)
export default store;