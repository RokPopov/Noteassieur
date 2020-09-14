import { Dispatch } from "redux"
import { GetState } from "../types"
import { CHANGE_NOTE_BY_ID, REMOVE_NOTE_BY_ID, STORE_NOTE } from "./types"

export function stageNewNote() {
  return (dispatch: Dispatch, getState: GetState) => {
    console.log("test")
    const notes = getState().notes

    const highestID = notes.reduce((accumulator: any, note) => {
      if (note.id > accumulator) {
        return note.id
      }
      return accumulator
    }, 0)

    const id = highestID + 1

    dispatch(storeNote(id))
  }
}

function storeNote(id: number) {
  return {
    type: STORE_NOTE,
    id
  }
}

export function stageRemoveNote(id: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(removeNoteById(id))
  }
}

function removeNoteById(id: number) {
  return {
    type: REMOVE_NOTE_BY_ID,
    id
  }
}

export function stageChangeNote(id: number, content: string) {
  return (dispatch: Dispatch, getSTate: GetState) => {
    dispatch(changeNote(id, content))
  }
}

function changeNote(id: number, content: string) {
  return {
    type: CHANGE_NOTE_BY_ID,
    id,
    content
  }
}
