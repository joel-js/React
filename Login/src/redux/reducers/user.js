import { useReducer } from "react";
import { CURR_USER_SUCCESS } from "../types/user";

const initialState = {
  data : {} 
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    case CURR_USER_SUCCESS :
      const data = JSON.stringify(action.payload)
      return {...state, data}

    default:
      return state

  }
}

export default reducer;