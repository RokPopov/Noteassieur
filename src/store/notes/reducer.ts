import { Note } from "../../global"
import { CHANGE_NOTE_BY_ID, myNoteActionTypes, REMOVE_NOTE_BY_ID, STORE_NOTE } from "./types"

const initialState: Note[] = [
  {
    id: 1,
    content: "new note"
  },
  {
    id: 2,
    content: "new note"
  }
]

export default (state = initialState, action: myNoteActionTypes) => {
  switch (action.type) {
    case STORE_NOTE:
      return [...state, { id: action.id, content: "new note" }]

    case REMOVE_NOTE_BY_ID:
      return [
        ...state.filter((note) => {
          if (note.id === action.id) {
            return null
          } else {
            return note
          }
        })
      ]

    case CHANGE_NOTE_BY_ID:
      return [
        ...state.map((note) => {
          if (note.id === action.id) {
            return { ...note, content: action.content }
          } else {
            return { ...note }
          }
        })
      ]

    default:
      return state
  }
}
