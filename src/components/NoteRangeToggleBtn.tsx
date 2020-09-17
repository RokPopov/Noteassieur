import React from "react"
import { useDispatch } from "react-redux"
import { stageTimeNoteId, toggleNoteRange } from "../store/appstore/actions"

type Props = {
  timenoteId: any
}

export default function NoteRangeToggleBtn(props: Props) {
  const dispatch = useDispatch()

  function handleToggle() {
    dispatch(stageTimeNoteId(parseInt(props.timenoteId)))

    dispatch(toggleNoteRange())
  }

  return (
    <div>
      <button onClick={handleToggle}>Toggle Range</button>
    </div>
  )
}
