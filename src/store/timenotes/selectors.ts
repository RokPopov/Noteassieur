import { time } from "console"
import { Note, Timenote } from "../../global"
import { StoreState } from "../types"

export const selectAllNotes = (argument: any) => {
  return (state: StoreState) => {
    if (state.timenotes === undefined) {
      return []
    }
    return state.timenotes.filter((timenote) => {
      if (timenote.timeIn <= argument && timenote.timeOut >= argument) {
        return timenote.notes.filter((note) => {
          return note
        })
      }
    })
  }
}
