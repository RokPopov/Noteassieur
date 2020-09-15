import { time } from "console"
import { Dispatch } from "redux"
import { Timenote } from "../../global"
import { GetState } from "../types"
import { REMOVE_NOT_BY_IDS, STORE_A_NOTE_BY_TIMENOTE_ID } from "./types"

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

export function stageAddNote(timeLineValue: number) {
  return (dispatch: Dispatch, GetState: GetState) => {
    const timenoteMatchingTimecode = GetState().timenotes.filter((timenote) => {
      const startsAfter = timenote.timeIn <= timeLineValue
      const endsBefore = timenote.timeOut >= timeLineValue
      const isInside = startsAfter && endsBefore
      return isInside
    })
    console.log(timeLineValue)
    console.log("this is it:", timenoteMatchingTimecode[0].id)

    const timenoteId = timenoteMatchingTimecode[0].id

    const highestID = timenoteMatchingTimecode[0].notes.reduce((accumulator: any, note) => {
      if (note.id > accumulator) {
        return note.id
      }
      return accumulator
    }, 0)

    dispatch(storeANoteByTimenoteId(timenoteId, highestID + 1))
  }
}

function storeANoteByTimenoteId(timenoteId: Number, highestID: number) {
  return {
    type: STORE_A_NOTE_BY_TIMENOTE_ID,
    timenoteId,
    highestID
  }
}
