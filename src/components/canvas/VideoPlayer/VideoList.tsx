import React, { useState, useEffect } from "react";
import axios from "axios";
import Player from "./Index";

function VideoList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("React Native");

  const [videoId, setVideoId] = useState("Hf4MJH0jDb4");

  function handleSubmit(e: any) {
    console.log(search);
    e.preventDefault();

    fetchData();
  }

  function onChange(e: any) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const fetchData = async () => {
    const result = await axios(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyB0E92lnR4Ar160Qst27hLpLAH4qS-YatU`
    );

    setData(result.data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const videos: any = !data ? (
    <p>loading</p>
  ) : (
    data.map((video: any) => {
      return (
        <>
          <p>{video.snippet.title}</p>

          <p>
            <span
              onClick={() => {
                setVideoId(video.id.videoId);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                width="320"
                height="240"
              ></img>
            </span>
          </p>
        </>
      );
    })
  );

  // const videoPlay: any = !data ? (
  //   <p>loading</p>
  // ) : (
  //   data.map((video: any) => {
  //     return video.id.videoId;
  //   })
  // );

  return (
    <>
      <Player videoPlay={videoId} />
      <form onSubmit={handleSubmit}>
        <input onChange={onChange} type="text" value={search} />
        <input type="submit" />
      </form>
      <p>{videos}</p>
    </>
  );
}

export default VideoList;
