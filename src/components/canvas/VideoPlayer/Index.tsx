import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import VideoList from "./VideoList";
import Duration from "./Duration";

function Player() {
  const [played, setPlayed] = useState(0);
  const ref = useRef<ReactPlayer | null>(null);
  const [, setSeeking] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [duration, setDuration] = useState(1);

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
    return <p>{Math.round(duration * played)}</p>;
  }

  const videoId = "jhdFe3evXpk";

  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
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

      <tr>
        <th></th>
        <td>
          <button onClick={handlePlayPause}>
            {playing ? "Pause" : "Play"}
          </button>
        </td>
      </tr>
      <tr>
        <th></th>
        <td>
          <button onClick={handleAddNote}>Add Node</button>
        </td>
      </tr>

      <tr>
        <th>Volume</th>
        <td>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
          />
        </td>
      </tr>

      <tr>
        <th>Seeking</th>
        <td>
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
        </td>
      </tr>

      <tr>
        <th>duration</th>
        <td>
          <Duration seconds={duration} />
        </td>
      </tr>
      <tr>
        <th>elapsed</th>
        <td>
          <Duration seconds={duration * played} />
        </td>
      </tr>
      <tr>
        <th>remaining</th>
        <td>
          <Duration seconds={duration * (1 - played)} />
        </td>
      </tr>
      <VideoList />
    </div>
  );
}

export default Player;
