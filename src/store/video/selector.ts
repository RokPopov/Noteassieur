import { StoreState } from "../types"

export const selectMyVideo = (state: StoreState) => {
  return state.video
}

export const selectLengthOfVid = (state: StoreState) => {
  return state.video.lengthOfVid
}
