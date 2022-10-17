const configureStore  = require('@reduxjs/toolkit').configureStore
// const reduxlogger          = require('redux-logger')

const cakeReducer     = require('../features/cakes/cakeSlice')
const icecreamReducer = require('../features/icecreams/icecreamSlice')
const usersReducer    = require('../features/users/usersSlice')
// const logger          = reduxlogger.createLogger()

const store   = configureStore({
  reducer     : {
    // cake      : cakeReducer,
    // icecream  : icecreamReducer,
    users     : usersReducer
  },
  // middleware  : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store