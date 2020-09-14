export const STORE_NOTE = "STORE_NOTE"

export const REMOVE_NOT_BY_IDS = "REMOVE_NOT_BY_IDS"
export const CHANGE_NOTE_BY_ID = "CHANGE_NOTE_BY_ID"

type RemoveNoteByIds = {
  type: typeof REMOVE_NOT_BY_IDS
  id: number
  timenoteId: number
}

export type myNoteActionTypes = RemoveNoteByIds
