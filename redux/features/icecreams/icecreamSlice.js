const createSlice = require('@reduxjs/toolkit').createSlice
const {cakeActions} = require('../cakes/cakeSlice')


const initialState = {
  numOfIcecreams  : 10
}

const icecremSlice = createSlice({
  name          : 'icecream',
  initialState,
  reducers      : {
    ordered   : (state,action) => {
      state.numOfIcecreams -= action.payload
    },
    restocked : (state,action) => {
      state.numOfIcecreams += action.payload
    }
  },
  // extraReducers : {
  //   ['cake/ordered'] : (state) => {
  //     state.numOfIcecreams -= 1
  //   }
  // }

  extraReducers : (builder) => {
    builder.addCase( cakeActions.ordered, (state) => {
      state.numOfIcecreams -= 1
    })
  }
  
})

module.exports                  = icecremSlice.reducer
module.exports.icecreamActions  = icecremSlice.actions