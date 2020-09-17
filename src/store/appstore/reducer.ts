import { Appstore } from "../../global"
import { CURTIMENOTE_ID, myAppStoreActionTypes, TOGGLE_RANGE_BTN } from "./types"

const initialState: Appstore = {
  btnRangeVisible: false,
  curTimeNoteId: null
}

export default (state = initialState, action: myAppStoreActionTypes) => {
  switch (action.type) {
    case TOGGLE_RANGE_BTN:
      return { ...state, btnRangeVisible: !state.btnRangeVisible }

    case CURTIMENOTE_ID:
      return { ...state, curTimeNoteId: action.curTimeNoteId }

    default:
      return state
  }
}
