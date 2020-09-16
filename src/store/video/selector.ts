import { StoreState } from "../types"

export const selectMyVideo = (state: StoreState) => {
  return state.video
}

export const selectHaveVideo = (state: StoreState) => {
  return state.video.url
}
