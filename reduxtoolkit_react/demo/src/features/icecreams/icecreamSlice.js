import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cakes/cakeSlice'


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
      state.numOfIcecreams = action.payload
    }
  },
  // extraReducers : {
  //   ['cake/ordered'] : (state) => {
  //     state.numOfIcecreams -= 1
  //   }
  // }

  extraReducers : (builder) => {
    builder.addCase( cakeOrdered, (state) => {
      state.numOfIcecreams -= 1
    })
  }
  
})

export default icecremSlice.reducer
export const {ordered, restocked}  = icecremSlice.actions