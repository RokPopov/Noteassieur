import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { stageRemoveNote } from "../../../store/timenotes/actions"
import { selectTimenotes } from "../../../store/timenotes/selectors"

export default function KonvaApproach() {
  const dispatch = useDispatch()

  // function newNote() {
  //   dispatch(stageNewNote())
  // }

  // function changeNote(e: textAreaOnChange) {
  //   const content = e.target.value
  //   const id = parseInt(e.target.id)

  //   dispatch(stageChangeNote(id, content))
  // }

  const [show, setShow] = useState(false)

  function minimize() {
    setShow(!show)
  }

  const display = show ? "none" : ""
  const gridsize = show ? 100 : 200

  const [timelineValue, setTimeLine] = useState(0)

  const allNotes = useSelector(selectTimenotes(timelineValue))

  function timelineout(e: any) {
    console.log(e.target.value)
    setTimeLine(parseInt(e.target.value))
  }

  console.log("this is,", allNotes)

  function removeNote(id: number, timenoteId: number) {
    dispatch(stageRemoveNote(id, timenoteId))
  }

  return (
    <div>
      <div />
      <button onClick={minimize} style={{ fontSize: "9px", margin: "5px" }}>
        {!show ? "minimize" : "maximize"}
      </button>

      <div style={{ display: "grid", gridTemplateColumns: `${gridsize}px 200px` }}>
        <div style={{ display: `${display}` }}>
          {allNotes.map((timenote) => {
            return timenote.notes.map((note) => {
              return (
                <div key={note.id}>
                  <textarea defaultValue={note.content} name="" cols={13} rows={3}></textarea>
                  <button onClick={() => removeNote(note.id, timenote.id)}>-</button>
                </div>
              )
            })
          })}

          <br />
          {/* <button onClick={newNote}>Add a note</button> */}
        </div>
        <div style={{ border: "1px solid black", width: "400px", height: "200px", margin: "auto" }}>
          {allNotes.map((timenotes) => {
            return timenotes.notes.map((note) => {
              return <p>{note.content}</p>
            })
          })}
        </div>
        <div></div>
        <div>{/* <div style={{ border: "1px solid black", width: "400px", height: "200px", margin: "auto" }}>
            {allNotes.map((note) => {
              return <p>{note.content.length > 1 ? note.content : "_"}</p>
            })}
          </div> */}</div>
      </div>
      <input onChange={timelineout} style={{ width: "500px" }} type="range" min="0" max="300" />
      <p>range :{timelineValue}</p>
    </div>
  )
}
