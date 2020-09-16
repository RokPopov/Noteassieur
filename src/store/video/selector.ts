import { StoreState } from "../types"

export const selectMyVideo = (state: StoreState) => {
  return state.video
}


