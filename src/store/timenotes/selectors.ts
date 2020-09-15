import { time } from "console"
import { Note, Timenote } from "../../global"
import { StoreState } from "../types"

export const selectTimenotes = (argument: any) => {
  return (state: StoreState) => {
    if (state.timenotes === undefined) {
      return []
    }
    console.log(state.timenotes)
    return state.timenotes.filter((timenote) => {
      console.log(timenote)
      const startsAfter = timenote.timeIn <= argument
      const endsBefore = timenote.timeOut >= argument
      const isInside = startsAfter && endsBefore
      return isInside
    })
  }
}
