import { Dispatch } from "redux"
import { GetState } from "../types"
import { STORE_CURTIME } from "./types"

export function stageCurTimeOfVideo(curtime: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({
      type: STORE_CURTIME,
      curtime
    })
  }
}


