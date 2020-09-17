import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { stageNewtimenote } from "../store/timenotes/actions"
import { selectCurTime } from "../store/timenotes/selectors"

export default function NewNotes() {
  const curTime = useSelector(selectCurTime)

  const dispatch = useDispatch()

  const history = useHistory()

  function newTimenote() {
    dispatch(stageNewtimenote(curTime))

    history.push(`/${curTime}`)
  }
  return (
    <div>
      <button
        style={{
          // display: `${!buttonshow ? `none` : ``}`,
          fontSize: "10px"
        }}
        onClick={newTimenote}
      >
        📝 new notes
      </button>
    </div>
  )
}
