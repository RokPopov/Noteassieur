export const TOGGLE_RANGE_BTN = "TOGGLE_RANGE_BTN"
export const CURTIMENOTE_ID = "CURTIMENOTE_ID"

type ToggleRangeBtn = {
  type: typeof TOGGLE_RANGE_BTN
}

type CurTimeNoteId = {
  type: typeof CURTIMENOTE_ID
  curTimeNoteId: number
}

export type myAppStoreActionTypes = ToggleRangeBtn | CurTimeNoteId
