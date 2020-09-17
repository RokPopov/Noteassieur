import { Dispatch } from "redux"
import { GetState } from "../types"
import { CHANGE_NOTE_BY_ID, NEW_NOTE_AT_CUR_TIME, REMOVE_NOT_BY_IDS, SET_TIME_IN_BY_ID, SET_TIME_OUT_BY_ID, STORE_A_NOTE_BY_TIMENOTE_ID } from "./types"

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

export function stageNewtimenote(curtime: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    const HighestId = getState().timenotes.reduce((accumulator: any, timenote) => {
      if (timenote.id > accumulator) {
        return timenote.id
      }
      return accumulator
    }, 0)

    const newId = HighestId + 1

    dispatch({
      type: NEW_NOTE_AT_CUR_TIME,
      curtime,
      newId
    })
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

export function stageSetTimeIn(timeIn: number, timenoteId: number | null) {
  return (dispatch: Dispatch) => {
    console.log(timeIn)
    console.log(timenoteId)

    dispatch({
      type: SET_TIME_IN_BY_ID,
      timeIn,
      timenoteId
    })
  }
}

export function stageSetTimeOut(timeOut: number, timenoteId: number | null) {
  return (dispatch: Dispatch) => {
    console.log(timeOut)
    console.log(timenoteId)

    dispatch({
      type: SET_TIME_OUT_BY_ID,
      timeOut,
      timenoteId
    })
  }
}

export function stageEditNote(content: string, id: number, timenoteId: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CHANGE_NOTE_BY_ID,
      content,
      id,
      timenoteId
    })
  }
}
