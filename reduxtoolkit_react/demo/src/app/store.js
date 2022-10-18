import { configureStore } from '@reduxjs/toolkit'
// const reduxlogger          = require('redux-logger')

import cakeReducer from '../features/cakes/cakeSlice'
import icecreamReducer from '../features/icecreams/icecreamSlice'
import usersReducer from '../features/users/usersSlice'
// const logger          = reduxlogger.createLogger()

const store   = configureStore({
  reducer     : {
    cake      : cakeReducer,
    icecream  : icecreamReducer,
    users     : usersReducer
  },
  // middleware  : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store