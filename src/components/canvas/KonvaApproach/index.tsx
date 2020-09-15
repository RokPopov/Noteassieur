import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Timenote } from "../../../global"
import { stageAddNote, stageNewtimenote, stageRemoveNote, stageSetTimeIn, stageSetTimeOut } from "../../../store/timenotes/actions"
import { selectMinMaxValueById, selectTimenotes } from "../../../store/timenotes/selectors"

export default function KonvaApproach() {
  const dispatch = useDispatch()

  const [timelineValue, setTimeLine] = useState(0)
  const [playPause, setPlayPause] = useState(false)

  useEffect(() => {
    if (playPause) {
      setTimeout(() => {
        setTimeLine(timelineValue + 1)
      }, 1000)
    }
  }, [timelineValue, playPause])

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

  function newTimenote() {
    dispatch(stageNewtimenote(timelineValue))
  }

  const buttonshow = notesAtPointInTime.length === 0 ? true : false

  const [id, setId] = useState<number>(0)
  const minMaxValue: Timenote | undefined = useSelector(selectMinMaxValueById(id))

  function setRange(id: number) {
    setId(id)
  }

  console.log(typeof minMaxValue?.timeIn)

  function setTimeIn(e: any) {
    const timeIn = e.target.value

    dispatch(stageSetTimeIn(timeIn, id))
  }

  function setTimeOut(e: any) {
    const timeOut = e.target.value

    dispatch(stageSetTimeOut(timeOut, id))
  }

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: `200px 200px` }}>
        <div>
          {notesAtPointInTime.map((timenote) => {
            return timenote.notes.map((note) => {
              return (
                <div key={note.id}>
                  {note.id === 1 ? (
                    <div>
                      {timenote.timeOut - timelineValue > 3 ? (
                        <div>
                          <small>range: </small>
                          <small>{timenote.timeIn} - </small>
                          <small>{timenote.timeOut} </small>
                          <button onClick={() => setRange(timenote.id)}>Edit</button>
                        </div>
                      ) : (
                        <small>{timenote.timeOut - timelineValue} sec left</small>
                      )}
                    </div>
                  ) : (
                    ""
                  )}

                  <textarea defaultValue={note.content} name="" cols={13} rows={3}></textarea>
                  <button onClick={() => removeNote(note.id, timenote.id)}>-</button>
                </div>
              )
            })
          })}
          <br />
          <button disabled={buttonshow} onClick={newNote}>
            Add a note
          </button>
          <button onClick={newTimenote}>Add new notes from here</button>
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
      <input onChange={timelineout} defaultValue={timelineValue} style={{ width: "500px" }} type="range" min="0" max="300" />
      <div>
        <button onClick={() => setPlayPause(!playPause)}>{!playPause ? "play" : "pause"}</button>
      </div>
      <p>time {timelineValue} in seconds</p>

      {id !== 0 ? (
        <div style={{ width: "500px", margin: "auto" }}>
          <small>In point: {minMaxValue?.timeIn}</small>
          <input onChange={setTimeIn} value={minMaxValue?.timeIn} style={{ width: "500px" }} type="range" min="0" max="300" />
          <small>Out point: {minMaxValue?.timeOut}</small>
          <input onChange={setTimeOut} value={minMaxValue?.timeOut} style={{ width: "500px" }} type="range" min="0" max="300" />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
