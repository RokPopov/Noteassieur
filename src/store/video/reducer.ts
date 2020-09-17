import { Video } from "../../global";
import {
  myVideoActionTypes,
  STORE_CURTIME,
  STORE_TOTALTIME,
  STORE_CURVIDEO,
} from "./types";

const initialState: Video = {
  title: "test video",
  url: "", // some video
  lengthOfVid: 200,
  curTimeOfVideo: 0.0,
  // lengthOfVid: 200 // this should be dynamically
};

export default (state = initialState, action: myVideoActionTypes) => {
  switch (action.type) {
    case STORE_CURTIME:
      return { ...state, curTimeOfVideo: action.curtime };

    case STORE_TOTALTIME:
      return { ...state, lengthOfVid: action.totaltime };

    case STORE_CURVIDEO:
      return { ...state, url: action.curvideo };

    default:
      return state;
  }
};
