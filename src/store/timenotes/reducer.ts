import { Timenote } from "../../global"
import { myNoteActionTypes, REMOVE_NOT_BY_IDS, STORE_A_NOTE_BY_TIMENOTE_ID } from "./types"

const initialState: Timenote[] = [
  {
    id: 1,
    timeIn: 0,
    timeOut: 10,
    notes: [
      {
        id: 1,
        content: "some title 1-1 "
      },
      {
        id: 2,
        content: "some title 1-2 "
      }
    ]
  },
  {
    id: 2,
    timeIn: 10,
    timeOut: 20,
    notes: [
      {
        id: 1,
        content: "some title 2-1"
      }
    ]
  },
  {
    id: 3,
    timeIn: 30,
    timeOut: 40,
    notes: [
      {
        id: 1,
        content: "some title 3-1"
      },
      {
        id: 2,
        content: "some title 3-2"
      },
      {
        id: 3,
        content: "some title 3-3"
      }
    ]
  }
]

export default (state = initialState, action: myNoteActionTypes) => {
  switch (action.type) {
    case REMOVE_NOT_BY_IDS:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            notes: timenote.notes.filter((note) => note.id !== action.id)
          }
        } else {
          return timenote
        }
      })

    case STORE_A_NOTE_BY_TIMENOTE_ID:
      return state.map((timenote: Timenote) => {
        if (timenote.id === action.timenoteId) {
          return {
            ...timenote,
            notes: [
              ...timenote.notes,
              {
                id: action.highestID,
                content: `note ${action.highestID}`
              }
            ]
          }
        } else {
          return timenote
        }
      })

    default:
      return state
  }
}
