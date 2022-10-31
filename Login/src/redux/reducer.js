import { LOGIN_SUCCESS } from "./types";

const initialState = {
  logged_in : false,
  user      : {}     
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case LOGIN_SUCCESS: 
    const {logged_in} = action
    return {...state, logged_in}
    default: return state
  }
}
export default reducer;