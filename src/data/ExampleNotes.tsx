import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { stageEditNote, stageNewtimenote, stageSetTimeOut } from "../store/timenotes/actions"
import { stageCurVideo } from "../store/video/actions"
import { selectLengthOfVid } from "../store/video/selector"

export default function ExampleNotes() {
  const dispatch = useDispatch()

  const lengthOfVid = useSelector(selectLengthOfVid)

  function handleClickCheck() {
    dispatch(stageCurVideo("6sWbpDie0k0"))
  }

  function handleClickYourself() {
    dispatch(stageNewtimenote(13 / lengthOfVid))
    dispatch(stageEditNote("come on!", 1, 1))
    dispatch(stageSetTimeOut(14 / lengthOfVid, 1))
    dispatch(stageNewtimenote(14 / lengthOfVid))
    dispatch(stageEditNote("and chickity check yo self before you wreck yo self", 1, 2))
    dispatch(stageSetTimeOut(18 / lengthOfVid, 2))
    dispatch(stageNewtimenote(19 / lengthOfVid))
    dispatch(stageEditNote("Check...", 1, 3))
    dispatch(stageSetTimeOut(20 / lengthOfVid, 3))

    dispatch(stageNewtimenote(21 / lengthOfVid))
    dispatch(stageEditNote("Yeah..", 1, 4))
    dispatch(stageSetTimeOut(22 / lengthOfVid, 4))
  }

  return (
    <div>
      <button onClick={handleClickCheck}> Check</button>
      <button onClick={handleClickYourself}>Yourself</button>
    </div>
  )
}
