import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
// import VideoList from "./VideoList";
import Duration from "./Duration";

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

  return (
    <div>
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

      {playing ? (
        <p>
          <button onClick={handlePlayPause}> Pause</button>
          <button onClick={handleAddNote}>Add Node</button>
        </p>
      ) : (
        <p>
          <button onClick={handlePlayPause}> Play</button>
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
      <p>{note}</p>
    </div>
  );
}

export default Player;
