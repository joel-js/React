// const redux         = require("redux");
// const reduxLogger   = require("redux-logger")

// const createStore       = redux.createStore
// const combineReducers   = redux.combineReducers
// const applyMiddleware   = redux.applyMiddleware
// const logger            = reduxLogger.createLogger()

// const BUY_CAKE      = 'BUY_CAKE';
// const BUY_ICECREAM  = 'BUY_ICECREAM';

// const buyCake = () => ({
//     type    : BUY_CAKE,
//     info    : 'Buying Cake' 
// })

// const buyIceCreams = () =>  ( { 
//     type    : BUY_ICECREAM,
//     info    : 'Buying Cake' 
// } )

// const initialCakeState = {
//     numOfCakes      : 10
// }
// const initialIceCreamState = {
//     numOfIceCreams  : 10
// }

// const cakeReducer = (state = initialCakeState, action) => {
//     switch(action.type){

//         case BUY_CAKE   : return {
//             ...state,
//             numOfCakes  : state.numOfCakes - 1
//         }
        
//         default : return state
//     }
// }

// const iceCreamReducer = (state = initialIceCreamState, action) => {
//     switch(action.type){

//         case BUY_ICECREAM   : return {
//             ...state,
//             numOfIceCreams  : state.numOfIceCreams -1
//         }
        
//         default : return state
//     }
// }

// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// })

// const store = createStore(rootReducer,applyMiddleware(logger))
// // console.log('Initial State', store.getState());
// const unsubscribe = store.subscribe(() => {})

// // store.dispatch(buyCake())
// // store.dispatch(buyIceCreams())
// // store.dispatch(buyCake())
// // unsubscribe()

// // console.log(store.getState())

// const { subscribe } = require('./app/store');
const store       = require('./app/store')
// const cakeActions = require('./features/cakes/cakeSlice').cakeActions 
// const iceActions  = require('./features/icecreams/icecreamSlice').icecreamActions
const getUsers    = require('./features/users/usersSlice').getUsers
console.log('initial state', store.getState());

const unsubscribe = store.subscribe( () => { console.log('updated state', store.getState()) })

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered()) 
// store.dispatch(iceActions.ordered(1))
// store.dispatch(iceActions.ordered(2))
// store.dispatch(iceActions.restocked(3))
// store.dispatch(cakeActions.restocked(3))

store.dispatch(getUsers())

// unsubscribe()