import { StoreState } from "../types"

export const selectTimenotes = (timecode: any) => {
  return (state: StoreState) => {
    return state.timenotes.filter((timenote) => {
      const startsAfter = timenote.timeIn <= timecode
      const endsBefore = timenote.timeOut >= timecode
      const isInside = startsAfter && endsBefore
      return isInside
    })
  }
}

export const selectMinMaxValueById = (id: number | null) => {
  return (state: StoreState) => {
    return state.timenotes.find((timenote) => {
      if (timenote.id === id) {
        return timenote
      }
    })

    console.log(id)
  }
}

export const selectAllTimenotes = (state: StoreState) => {
  return state.timenotes
}

export const selectCurTime = (state: StoreState) => {
  return state.video.curTimeOfVideo
}
