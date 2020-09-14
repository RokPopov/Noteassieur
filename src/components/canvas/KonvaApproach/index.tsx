import React, { useState } from "react"
import useDispatch from "react-redux"

export default function KonvaApproach() {
  const [noteValue, setNoteValue] = useState("")

  //const dispatch = useDispatch(function)

  function addNote(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNoteValue(e.target.value)
  }

  console.log(noteValue)
  return (
    <div>
      <textarea value={noteValue} onChange={addNote} name="" id="" cols={15} rows={5}></textarea>
      <h1>temp canvas:</h1>
      <div style={{ border: "1px solid black", width: "400px", height: "200px", margin: "auto" }}>
        <p>{noteValue}</p>
      </div>
    </div>
  )
}
