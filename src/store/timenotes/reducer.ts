import { Timenote } from "../../global"
import { CHANGE_NOTE_BY_ID, myNoteActionTypes, NEW_NOTE_AT_CUR_TIME, REMOVE_NOT_BY_IDS, SET_TIME_IN_BY_ID, SET_TIME_OUT_BY_ID, STORE_A_NOTE_BY_TIMENOTE_ID } from "./types"

const initialState: Timenote[] = []

export default (state = initialState, action: myNoteActionTypes) => {
  switch (action.type) {
    case NEW_NOTE_AT_CUR_TIME:
      return [
        ...state,
        {
          id: action.newId,
          timeIn: action.curtime,
          timeOut: action.curtimePlussed,
          notes: [
            {
              id: 1,
              content: "Here your first note! 😜"
            }
          ]
        }
      ]

    case REMOVE_NOT_BY_IDS:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            notes: timenote.notes.filter((note) => note.id !== action.id)
          }
        } else {
          return timenote
        }
      })

    case STORE_A_NOTE_BY_TIMENOTE_ID:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            notes: [
              ...timenote.notes,
              {
                id: action.highestID,
                content: `note ${action.highestID}`
              }
            ]
          }
        } else {
          return timenote
        }
      })

    case SET_TIME_IN_BY_ID:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            timeIn: action.timeIn
          }
        } else {
          return timenote
        }
      })

    case SET_TIME_OUT_BY_ID:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            timeOut: action.timeOut
          }
        } else {
          return timenote
        }
      })

    case CHANGE_NOTE_BY_ID:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            notes: [
              ...timenote.notes.map((note) => {
                if (note.id === action.id) {
                  return { ...note, content: action.content }
                } else {
                  return { ...note }
                }
              })
            ]
          }
        } else {
          return timenote
        }
      })

    default:
      return state
  }
}
