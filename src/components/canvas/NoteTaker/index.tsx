import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Timenote } from "../../../global"
import { Typography, Slider } from "@material-ui/core"
import { stageAddNote, stageEditNote, stageNewtimenote, stageRemoveNote, stageSetTimeIn, stageSetTimeOut } from "../../../store/timenotes/actions"
import { selectAllTimenotes, selectCurTime, selectTotalTime, selectMinMaxValueById, selectTimenotes } from "../../../store/timenotes/selectors"
import { stageCurTimeOfVideo } from "../../../store/video/actions"
import Duration from "../VideoPlayer/Duration"
import VideoList from "../VideoPlayer/VideoList"
import NoteRangeToggleBtn from "../../NoteRangeToggleBtn"
import { stageTimeNoteId } from "../../../store/appstore/actions"

// import Player from "../VideoPlayer/Index";

export default function NoteTaker() {
  const dispatch = useDispatch()

  const curTime = useSelector(selectCurTime)
  const TotalTime = useSelector(selectTotalTime)

  const notesAtPointInTime = useSelector(selectTimenotes(curTime))

  function timelineout(e: any) {
    console.log(e.target.value)
    dispatch(stageCurTimeOfVideo(parseFloat(e.target.value)))
  }

  function removeNote(id: number, timenoteId: number) {
    dispatch(stageRemoveNote(id, timenoteId))
  }

  function newNote() {
    dispatch(stageAddNote(curTime))
  }

  function newTimenote() {
    dispatch(stageNewtimenote(curTime))
  }

  const buttonshow = notesAtPointInTime.length === 0 ? true : false

  const [id, setId] = useState<number>(0)
  const minMaxValue: Timenote | undefined = useSelector(selectMinMaxValueById(id))

  console.log(minMaxValue)

  function setTimeIn(e: any) {
    const timeIn = e.target.value

    dispatch(stageSetTimeIn(timeIn, id))
  }

  function setTimeOut(e: any) {
    const timeOut = e.target.value

    dispatch(stageSetTimeOut(timeOut, id))
  }

  function editNote(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const content = e.target.value

    const [noteId, timenoteId] = e.target.id.split(" ")

    dispatch(stageEditNote(content, parseInt(noteId), parseInt(timenoteId)))
  }

  const allTimeNotes = useSelector(selectAllTimenotes)

  const [videoLength, setVideoLength] = useState(60 * 5)

  const [deleteBtn, setDelete] = useState(false)
  const [opacityDelete, setstate] = useState(1)

  function hoverIn() {
    setDelete(!deleteBtn)
  }

  function hoverAway() {
    setTimeout(() => {
      setDelete(!deleteBtn)
    }, 1000)
  }

  console.log("time", curTime)

  return (
    <div>
      <div
        style={{
          margin: "10px",
          display: "grid",
          gridTemplateColumns: `200px 200px`
        }}
      >
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            height: "200px",
            margin: "auto"
          }}
        >
          {notesAtPointInTime.map((timenote) => {
            return timenote.notes.map((note) => {
              return (
                <div>
                  {note.id === 1 ? <div></div> : ""}
                  {deleteBtn ? (
                    <div>
                      <NoteRangeToggleBtn timenoteId={timenote.id} />

                      <button style={{ fontSize: "4px", opacity: `${opacityDelete}` }} onClick={() => removeNote(note.id, timenote.id)}>
                        ❌
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  <textarea onMouseLeave={hoverAway} onMouseOver={hoverIn} draggable id={`${note.id.toString()} ${timenote.id.toString()}`} onChange={editNote} value={note.content} name="" cols={13} rows={3}></textarea>
                </div>
              )
            })
          })}
          <button
            style={{
              display: `${!buttonshow ? `none` : ``}`,
              fontSize: "10px"
            }}
            onClick={newTimenote}
          >
            📝 new notes
          </button>
          <button style={{ fontSize: "9px" }} disabled={buttonshow} onClick={newNote}>
            ➕
          </button>
        </div>
        <div></div>
      </div>

      {/* <input
        onChange={timelineout}
        value={curTime}
       
        type="range"
        min={0}
        max={0.999999}
        step="any"
      /> */}

      {id !== 0 ? (
        <>
          <div style={{ width: "500px", margin: "auto" }}>
            <Typography id="range-slider" gutterBottom>
              Show note at
            </Typography>
            <Slider
              defaultValue={minMaxValue?.timeIn}
              onChange={setTimeIn}
              valueLabelDisplay="auto"
              aria-labelledby="continuous-slider"
              min={0}
              max={0.999999}
              step={0.000001}

              // getAriaValueText={curTime}
            />
            <small>Moment when note starts showing: {minMaxValue?.timeIn ? <Duration seconds={minMaxValue?.timeIn * TotalTime} /> : minMaxValue?.timeIn}</small>
            <input onChange={setTimeIn} value={minMaxValue?.timeIn} style={{ width: "500px" }} type="range" min={0} max={0.999999} step="any" />
            <Typography id="range-slider" gutterBottom>
              Stop showing note at:
            </Typography>
            <Slider
              defaultValue={minMaxValue?.timeOut}
              onChange={setTimeOut}
              valueLabelDisplay="auto"
              aria-labelledby="continuous-slider"
              min={0}
              max={0.999999}
              step={0.000001}
              // getAriaValueText={curTime}
            />
            <small>
              Moment when note stops showing:
              {minMaxValue?.timeIn ? <Duration seconds={minMaxValue?.timeOut * TotalTime} /> : minMaxValue?.timeOut}
            </small>

            <input onChange={setTimeOut} value={minMaxValue?.timeOut} style={{ width: "500px" }} type="range" min={0} max={0.999999} step="any" />
          </div>
          <div
            style={{
              position: "relative",
              width: "500px",
              height: "15px",
              margin: "auto",
              boxShadow: "1px 1px 1px  rgba(1,0,0,0.05)"
            }}
          >
            {allTimeNotes.map((timenote) => {
              return (
                <div>
                  {/* // make a tooltip or modal for displaying the user indications of notes */}
                  {/* {timenote.notes.map((note) => {
                return <small>{note.content}</small>
              })} */}
                  <small
                    style={{
                      width: `${(timenote.timeOut - timenote.timeIn) * 100}%`,
                      position: "absolute",
                      left: `${timenote.timeIn * 100}%`,
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
        </>
      ) : (
        ""
      )}
    </div>
  )
}
