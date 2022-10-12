const redux = require("redux");

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => ({
    type    : BUY_CAKE,
    info    : 'Buying Cake' 
})

const buyIceCreams = () =>  ( { 
    type    : BUY_ICECREAM
} )

const initialState = {
    numOfCakes      : 10,
    numOfIceCreams  : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE   : return {
            ...state,
            numOfCakes  : state.numOfCakes - 1
        }
        break;
        case BUY_ICECREAM  : return {
            ...state,
            numOfIceCreams  : state.numOfIceCreams -1
        }
        break;

        default : return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated store', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyCake())
unsubscribe()
console.log(store.getState())