import { StoreState } from "../types"

export const selectTimenotes = (argument: any) => {
  return (state: StoreState) => {
    if (state.timenotes === undefined) {
      return []
    }

    return state.timenotes.filter((timenote) => {
      const startsAfter = timenote.timeIn <= argument
      const endsBefore = timenote.timeOut >= argument
      const isInside = startsAfter && endsBefore
      return isInside
    })
  }
}
