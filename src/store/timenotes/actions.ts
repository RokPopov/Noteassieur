import { Dispatch } from "redux"
import { GetState } from "../types"
import { REMOVE_NOT_BY_IDS } from "./types"

export function stageRemoveNote(id: number, timenoteId: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(removeNoteByIds(id, timenoteId))
  }
}

function removeNoteByIds(id: number, timenoteId: number) {
  return {
    type: REMOVE_NOT_BY_IDS,
    id,
    timenoteId
  }
}
