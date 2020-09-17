import { Dispatch } from "redux"
import { CURTIMENOTE_ID, TOGGLE_RANGE_BTN } from "./types"

export function toggleNoteRange() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TOGGLE_RANGE_BTN
    })
  }
}

export function stageTimeNoteId(curTimeNoteId: number | string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CURTIMENOTE_ID,
      curTimeNoteId
    })
  }
}
