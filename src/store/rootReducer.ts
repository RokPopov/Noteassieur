import { combineReducers } from "redux"
import timenotes from "./timenotes/reducer"
import video from "./video/reducer"
import appstore from "./appstore/reducer"

export default combineReducers({
  timenotes,
  video,
  appstore
})
