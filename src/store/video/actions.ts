import { Dispatch } from "redux";
import { GetState } from "../types";
import { STORE_CURTIME, STORE_TOTALTIME, STORE_CURVIDEO } from "./types";

export function stageCurTimeOfVideo(curtime: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({
      type: STORE_CURTIME,
      curtime,
    });
  };
}


export function stageTotalTimeOfVideo(totaltime: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({
      type: STORE_TOTALTIME,
      totaltime,
    });
  };
}

export function stageCurVideo(curvideo: string) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({
      type: STORE_CURVIDEO,
      curvideo,
    });
  };
}



