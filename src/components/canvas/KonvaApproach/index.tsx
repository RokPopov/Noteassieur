import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { stageChangeNote, stageNewNote, stageRemoveNote } from "../../../store/notes/actions"
import { selectAllNotes } from "../../../store/notes/selectors"

export default function KonvaApproach() {
  const allNotes = useSelector(selectAllNotes)

  const dispatch = useDispatch()

  function newNote() {
    dispatch(stageNewNote())
  }

  function removeNote(id: number) {
    dispatch(stageRemoveNote(id))
  }

  function changeNote(e: textAreaOnChange) {
    const content = e.target.value
    const id = parseInt(e.target.id)

    dispatch(stageChangeNote(id, content))
  }

  const [show, setShow] = useState(true)

  function minimize() {
    setShow(!show)
  }

  const display = show ? "none" : ""
  const gridsize = show ? 100 : 200

  return (
    <div style={{ display: "grid", gridTemplateColumns: `${gridsize}px 200px` }}>
      <div>
        <button onClick={minimize} style={{ fontSize: "9px", margin: "5px" }}>
          {!show ? "minimize" : "maximize"}
        </button>
        <div style={{ display: `${display}` }}>
          {allNotes.map((note) => {
            return (
              <div key={note.id}>
                <textarea id={note.id.toString()} onChange={changeNote} defaultValue={note.content} name="" cols={13} rows={3}></textarea>
                <button onClick={() => removeNote(note.id)}>-</button>
              </div>
            )
          })}
          <br />
          <button onClick={newNote}>Add a note</button>
        </div>
      </div>
      <div>
        <div style={{ border: "1px solid black", width: "400px", height: "200px", margin: "auto" }}>
          {allNotes.map((note) => {
            return <p>{note.content.length > 1 ? note.content : "_"}</p>
          })}
        </div>
      </div>
    </div>
  )
}
