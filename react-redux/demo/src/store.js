import {createStore } from 'react-redux'
import  cakeReducer from  './Components/Cake/cakeReducer'

const store = createStore(cakeReducer)

export default store;