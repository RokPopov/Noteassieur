export const STORE_NOTE = "STORE_NOTE"

export const REMOVE_NOT_BY_IDS = "REMOVE_NOT_BY_IDS"
export const CHANGE_NOTE_BY_ID = "CHANGE_NOTE_BY_ID"
export const STORE_A_NOTE_BY_TIMENOTE_ID = "STORE_A_NOTE_BY_TIMENOTE_ID"
export const SET_TIME_IN_BY_ID = "SET_TIME_IN_BY_ID"
export const SET_TIME_OUT_BY_ID = "SET_TIME_OUT_BY_ID"

type RemoveNoteByIds = {
  type: typeof REMOVE_NOT_BY_IDS
  id: number
  timenoteId: number
}

type StoreANotByTimenoteId = {
  type: typeof STORE_A_NOTE_BY_TIMENOTE_ID
  timenoteId: number
  highestID: number
}

type SetTimeInById = {
  type: typeof SET_TIME_IN_BY_ID
  timenoteId: number
  timeIn: number
}

type SetTimeOutById = {
  type: typeof SET_TIME_OUT_BY_ID
  timenoteId: number
  timeOut: number
}

export type myNoteActionTypes = RemoveNoteByIds | StoreANotByTimenoteId | SetTimeInById | SetTimeOutById
