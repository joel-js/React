import { combineReducers } from "redux";
import reducer from './reducer'

const rootReducer = combineReducers({
  name:reducer
});
export default rootReducer