export const STORE_NOTE = "STORE_NOTE"

export const REMOVE_NOTE_BY_ID = "REMOVE_NOTE_BY_ID"
export const CHANGE_NOTE_BY_ID = "CHANGE_NOTE_BY_ID"

type storeNote = {
  type: typeof STORE_NOTE
  id: number
}

type RemoveNoteById = {
  type: typeof REMOVE_NOTE_BY_ID
  id: number
}

type ChangeNotebyId = {
  type: typeof CHANGE_NOTE_BY_ID
  id: number
  content: string
}

export type myNoteActionTypes = storeNote | RemoveNoteById | ChangeNotebyId
