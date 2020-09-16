import { Video } from "../../global"
import { myVideoActionTypes, STORE_CURTIME } from "./types"

const initialState: Video = {
  title: "test video",
  url: "Hf4MJH0jDb4", // some video
  lengthOfVid: 200,
  curTimeOfVideo: 10
  // lengthOfVid: 200 // this should be dynamically
}

export default (state = initialState, action: myVideoActionTypes) => {
  switch (action.type) {
    case STORE_CURTIME:
      return { ...state, curTimeOfVideo: action.curtime }

    default:
      return state
  }
}
