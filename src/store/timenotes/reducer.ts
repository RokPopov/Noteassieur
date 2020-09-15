import { Timenote } from "../../global"
import { myNoteActionTypes, REMOVE_NOT_BY_IDS } from "./types"

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
  function removeFromTimenote(timenote: Timenote) {
    if (timenote.id === action.timenoteId) {
      return {
        ...timenote,
        notes: timenote.notes.filter((note) => note.id !== action.id)
      }
    }
    return timenote
  }
  console.log(action)
  console.log("this is state", state)
  switch (action.type) {
    case REMOVE_NOT_BY_IDS:
      return state.map(removeFromTimenote)

    //WHAT I SHOULD HAVE BEEN DOING:
    // return state.map((timenote: Timenote) => {
    //   if (timenote.id === action.timenoteId) {
    //     return {
    //       ...timenote,
    //       notes: timenote.notes.filter((note) => {
    //         if (note.id === action.id) {
    //           return null
    //         } else {
    //           return note
    //         }
    //       })
    //     }
    //   }
    // })

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

// const istate = {
//   notes : {
//       byId : {
//           "post1" : {
//               id : "post1",
//               author : "user1",
//               body : "......",
//               comments : ["comment1", "comment2"]
//           },
//           "post2" : {
//               id : "post2",
//               author : "user2",
//               body : "......",
//               comments : ["comment3", "comment4", "comment5"]
//           }
//       },
//       allIds : ["post1", "post2"]
//   },
//   comments : {
//       byId : {
//           "comment1" : {
//               id : "comment1",
//               author : "user2",
//               comment : ".....",
//           },
//           "comment2" : {
//               id : "comment2",
//               author : "user3",
//               comment : ".....",
//           },
//           "comment3" : {
//               id : "comment3",
//               author : "user3",
//               comment : ".....",
//           },
//           "comment4" : {
//               id : "comment4",
//               author : "user1",
//               comment : ".....",
//           },
//           "comment5" : {
//               id : "comment5",
//               author : "user3",
//               comment : ".....",
//           },
//       },
//       allIds : ["comment1", "comment2", "comment3", "commment4", "comment5"]
//   },
//   users : {
//       byId : {
//           "user1" : {
//               username : "user1",
//               name : "User 1",
//           },
//           "user2" : {
//               username : "user2",
//               name : "User 2",
//           },
//           "user3" : {
//               username : "user3",
//               name : "User 3",
//           }
//       },
//       allIds : ["user1", "user2", "user3"]
//   }
// }
