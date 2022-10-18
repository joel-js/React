import { createAsyncThunk } from '@reduxjs/toolkit'
import  Axios  from 'axios' 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading : 'false',
  users   : [],
  error   : ''
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await Axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (res) => res.data )
})

const usersSlice = createSlice({
  name          : 'user',
  initialState,
  extraReducers : (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users   = action.payload
      state.error   = ''
    })
    builder.addCase(getUsers.rejected, (state,action) => {
      state.loading = false
      state.users   = []
      state.error   = action.error.message
    })
  }
})

export default usersSlice.reducer