import { combineReducers } from "redux"
import timenotes from "./timenotes/reducer"
import video from "./video/reducer"

export default combineReducers({
  timenotes,
  video
})
