import React, { useState, useEffect } from "react";
import axios from "axios";
import Player from "./Index";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { stageCurVideo } from "../../../store/video/actions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Container, Input } from "@material-ui/core";
import { VideoId } from "../../../global";
import { useDispatch } from "react-redux";
function VideoList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("React Native");

  const [videoId, setVideoId] = useState<VideoId>("");

  const apiKey = "AAIzaSyB7oqbGww66q-TjxLGIK75kuaD20ChdoUc";

  function handleSubmit(e: any) {
    e.preventDefault();

    fetchData();
  }

  function onChange(e: any) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const fetchData = async () => {
    try {
      const result = await axios(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${apiKey}`
      );

      setData(result.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const curVideo = videoId;

    dispatch(stageCurVideo(curVideo));
  }, [videoId]);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  const videos: any = (
    <>
      <Grid container justify="center" spacing={1}>
        {data.map((video: any) => {
          return (
            <Grid key={video} item>
              <Card
                className={classes.root}
                style={{ height: 450, width: 370 }}
              >
                <CardContent>
                  <Typography
                    // className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      width="320"
                      height="240"
                    ></img>
                  </Typography>
                  <Typography variant="h6" component="h1">
                    {video.snippet.title.slice(0, 30)}
                  </Typography>
                  <Typography color="textSecondary">
                    {video.snippet.title}
                  </Typography>

                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        setVideoId(video.id.videoId);
                      }}
                      style={{ cursor: "pointer", marginTop: "50px" }}
                      variant="outlined"
                      color="primary"
                    >
                      Watch Video
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
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
      <Container>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <Input
            defaultValue="Search Here"
            onChange={onChange}
            type="text"
            value={search}
          />

          <Input type="submit" />
        </form>
      </Container>
      <Player />

      <p>{videos}</p>
    </>
  );
}

export default VideoList;
