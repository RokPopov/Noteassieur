import React from "react"
import { useSelector } from "react-redux"
import { selectAllTimenotes } from "../store/timenotes/selectors"
import { selectLengthOfVid } from "../store/video/selector"

export default function NotesOnTimeLine() {
  const allTimeNotes = useSelector(selectAllTimenotes)

  const lengthOfVid = useSelector(selectLengthOfVid)

  return (
    <div style={{ width: "500px", height: "15px", margin: "auto", position: "relative" }}>
      {allTimeNotes.map((timenote: any) => {
        return (
          <div>
            {/* // make a tooltip or modal for displaying the user indications of notes */}
            {/* {timenote.notes.map((note) => {
                return <small>{note.content}</small>
              })} */}

           
            
        

            <small
              style={{
                width: `${(timenote.timeOut - timenote.timeIn) * 500}px`,
                position: "absolute",
                left: `${timenote.timeIn * 500}px`,
                color: "#98B6D3",
                border: "none",
                fontSize: "2xp",
                boxShadow: "0px 1px 1px rgba(0,0,0,0.2)"
              }}
            >
              ✍︎
            </small>
          </div>
        )
      })}
    </div>
  )
}

// width: `${(timenote.timeOut - timenote.timeIn) * 100}px`,
// position: "absolute",
// left: `${timenote.timeIn * 100}px`,
