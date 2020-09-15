import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { stageAddNote, stageRemoveNote } from "../../../store/timenotes/actions"
import { selectTimenotes } from "../../../store/timenotes/selectors"

export default function KonvaApproach() {
  const dispatch = useDispatch()

  const [timelineValue, setTimeLine] = useState(0)

  const notesAtPointInTime = useSelector(selectTimenotes(timelineValue))

  function timelineout(e: any) {
    console.log(e.target.value)
    setTimeLine(parseInt(e.target.value))
  }

  function removeNote(id: number, timenoteId: number) {
    dispatch(stageRemoveNote(id, timenoteId))
  }

  function newNote() {
    dispatch(stageAddNote(timelineValue))
  }
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: `200px 200px` }}>
        <div>
          {notesAtPointInTime.map((timenote) => {
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
          <button onClick={newNote}>Add a note</button>
        </div>
        <div style={{ border: "1px solid black", width: "400px", height: "200px", margin: "auto" }}>
          {notesAtPointInTime.map((timenotes) => {
            return timenotes.notes.map((note) => {
              return <p key={note.id}>{note.content}</p>
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
