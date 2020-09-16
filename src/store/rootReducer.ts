import { combineReducers } from "redux"
import timenotes from "./timenotes/reducer"
import video from "./video/reducer"
import { routerReducer } from "react-router-redux"

export default combineReducers({
  timenotes,
  video,
  routing: routerReducer
})
