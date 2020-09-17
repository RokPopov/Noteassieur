import { StoreState } from "../types"

export const selectBtnRangeVisible = (state: StoreState) => {
  return state.appstore.btnRangeVisible
}

export const selectCurTimeNoteId = (state: StoreState) => {
  return state.appstore.curTimeNoteId
}
