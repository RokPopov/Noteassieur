import { Button, Container } from "@material-ui/core";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
// import VideoList from "./VideoList";
import Duration from "./Duration";
import "./index.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Player({ videoPlay }: { videoPlay: any }) {
  const [played, setPlayed] = useState(0);
  const ref = useRef<ReactPlayer | null>(null);
  const [, setSeeking] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [duration, setDuration] = useState(1);
  const [note, setNote] = useState(0);

  function handleSeekChange(e: any) {
    setPlayed(parseFloat(e.target.value));
  }

  function handlePlayPause() {
    setPlaying(!playing);
  }

  function handleSeekMouseDown() {
    setSeeking(true);
  }

  function handleSeekMouseUp(e: any) {
    setSeeking(false);
    ref?.current?.seekTo(parseFloat(e.target.value));
  }

  function handleVolumeChange(e: any) {
    setVolume(parseFloat(e.target.value));
  }

  function handleDuration(duration: number) {
    setDuration(duration);
  }

  function handleProgress(data: any) {
    setPlayed(data.played);
  }

  function handleAddNote() {
    console.log("This time", Math.round(duration * played));
    setPlaying(false);
    setNote(Math.round(duration * played));
  }

  const videoId = videoPlay;

  const gridStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
    })
  );

  const buttonStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
    })
  );

  const gridClass = gridStyles();
  const buttonClass = buttonStyles();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={gridClass.paper}>
            <Container maxWidth="sm">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}.`}
                ref={ref}
                playing={playing}
                controls={false}
                config={{ file: { attributes: { id: "audio-element" } } }}
                width="640px"
                height="320px"
                volume={volume}
                onProgress={handleProgress}
                onDuration={handleDuration}
              />
            </Container>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={gridClass.paper}>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}

            {playing ? (
              <p>
                <Button
                  variant="contained"
                  color="secondary"
                  className={buttonClass.button}
                  // startIcon={<DeleteIcon />}
                  onClick={handlePlayPause}
                >
                  Pause
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={buttonClass.button}
                  // endIcon={<Icon>send</Icon>}
                  onClick={handleAddNote}
                >
                  Add Note
                </Button>
              </p>
            ) : (
              <p>
                <Button
                  variant="contained"
                  color="secondary"
                  className={buttonClass.button}
                  // startIcon={<DeleteIcon />}
                  onClick={handlePlayPause}
                >
                  Play
                </Button>
              </p>
            )}
            <p>
              Volume{" "}
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
              />
            </p>
            <p>
              Jump to{" "}
              <input
                type="range"
                min={0}
                max={0.999999}
                step="any"
                value={played}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
              />
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
  );
}

export default Player;
