import { time } from "console"
import { Timenote } from "../../global"
import { CHANGE_NOTE_BY_ID, myNoteActionTypes, REMOVE_NOT_BY_IDS, STORE_NOTE } from "./types"

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
    // case STORE_NOTE:
    //   return [...state, { id: action.id, content: "new note" }]

    // case REMOVE_NOTE_BY_ID:
    //   return [
    //     ...state.filter((note) => {
    //       if (note.id === action.id) {
    //         return null
    //       } else {
    //         return note
    //       }
    //     })
    //   ]

    case REMOVE_NOT_BY_IDS:
      return [
        ...state.filter((timenote) => {
          if (timenote.id === action.timenoteId) {
            return {
              ...timenote.notes.map((note) => {
                if (note.id === action.id) {
                  return null
                } else {
                  return note
                }
              })
            }
          }
        })
      ]

    // console.log("timenote id:", action.timenoteId)
    // console.log("title id:", action.id)

    // case CHANGE_NOTE_BY_ID:
    //   return [
    //     ...state.map((note) => {
    //       if (note.id === action.id) {
    //         return { ...note, content: action.content }
    //       } else {
    //         return { ...note }
    //       }
    //     })
    //   ]

    default:
      return state
  }
}
