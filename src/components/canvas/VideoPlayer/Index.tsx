import { Button, Container } from "@material-ui/core"
import React, { useState, useRef, useEffect } from "react"
import ReactPlayer from "react-player"
import Duration from "./Duration"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { useDispatch, useSelector } from "react-redux"
import { selectMyVideo } from "../../../store/video/selector"
import { stageCurTimeOfVideo, stageTotalTimeOfVideo } from "../../../store/video/actions"
import { selectCurTime } from "../../../store/timenotes/selectors"

import NoteTaker from "../NoteTaker"

import { stageAddNote } from "../../../store/timenotes/actions"
import NoteRangeSetter from "../../range/NoteRangeSetter"
import NotesOnTimeLine from "../../NotesOnTimeLine"

function Player() {
  const [played, setPlayed] = useState(0)
  const ref = useRef<ReactPlayer | null>(null)
  const [, setSeeking] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [duration, setDuration] = useState(1)
  const [note, setNote] = useState(0)

  function handleSeekChange(e: any) {
    setPlayed(parseFloat(e.target.value))
  }

  function handleSeekMouseUp(e: any) {
    setSeeking(false)

    ref?.current?.seekTo(parseFloat(e.target.value))
  }

  function handlePlayPause() {
    setPlaying(!playing)
  }

  function handleVolumeChange(e: any) {
    setVolume(parseFloat(e.target.value))
  }

  function handleDuration(duration: number) {
    setDuration(duration)
  }

  function handleProgress(data: any) {
    setPlayed(data.played)
  }

  function handleAddNote() {
    setPlaying(false)
    dispatch(stageAddNote(curTime))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const curTime = played
    const TotalTime = Math.round(duration)
    dispatch(stageCurTimeOfVideo(curTime))
    dispatch(stageTotalTimeOfVideo(TotalTime))
  }, [played])

  const curTime = useSelector(selectCurTime)

  const gridStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
      }
    })
  )

  const buttonStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1)
      }
    })
  )

  const gridClass = gridStyles()
  const buttonClass = buttonStyles()

  const myVideo = useSelector(selectMyVideo)

  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={gridClass.paper}>
            <Container maxWidth="sm">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${myVideo.url}.`} ref={ref} playing={playing} controls={false} config={{ file: { attributes: { id: "audio-element" } } }} width="640px" height="320px" volume={volume} onProgress={handleProgress} onDuration={handleDuration} />
            </Container>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={gridClass.paper}>
            <NoteTaker />

            <NoteRangeSetter />

            <NotesOnTimeLine />
            <p>
              <input type="range" min={0} max={0.999999} style={{ width: "500px" }} step="any" value={curTime} onChange={handleSeekChange} onMouseUp={handleSeekMouseUp} />
            </p>

            {playing ? (
              <p>
                <Button variant="contained" color="secondary" className={buttonClass.button} onClick={handlePlayPause}>
                  Pause
                </Button>
              </p>
            ) : (
              <p>
                <Button variant="contained" color="secondary" className={buttonClass.button} onClick={handlePlayPause}>
                  Play
                </Button>
              </p>
            )}
            <p>
              Volume <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
            </p>

            <p>
              duration <Duration seconds={duration} />
            </p>
            <p>
              elapsed <Duration seconds={duration * played} />
            </p>
            <p>
              remaining <Duration seconds={duration * (1 - played)} />
            </p>

            <p>Note Time: {note}</p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Player
