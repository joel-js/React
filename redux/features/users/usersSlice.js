const { createAsyncThunk } = require('@reduxjs/toolkit')
const axios                = require('axios') 
const createSlice          = require('@reduxjs/toolkit').createSlice

const initialState = {
  loading : 'false',
  users   : [],
  error   : ''
}

const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then( (res) => res.data.map( (user) => user.id ) )
})

const usersSlice = createSlice({
  name          : 'user',
  initialState,
  extraReducers : (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false,
      state.users   = action.payload,
      state.error   = ''
    })
    builder.addCase(getUsers.rejected, (state,action) => {
      state.loading = false,
      state.users   = [],
      state.error   = action.error.message
    })
  }
})

module.exports           = usersSlice.reducer
module.exports.getUsers  = getUsers