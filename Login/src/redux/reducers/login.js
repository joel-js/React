import { LOGIN_SUCCESS } from "../types/login";

const initialState = {
  logged_in : false, 
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    
    case LOGIN_SUCCESS: 
      const logged_in = JSON.stringify(action.payload)
      return {...state, logged_in}
    
    default: return state
  }
}
export default reducer;