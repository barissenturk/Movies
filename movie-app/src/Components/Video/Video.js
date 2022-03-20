import React, { useEffect, useState } from "react";

import axios from "axios";
import YouTube from "react-youtube";

import styles from "./Video.module.css";

export default function Video({ movieId }) {
  const [video, setvideo] = useState();

  useEffect(() => {
    fetchTrail();
  }, []);

  const fetchTrail = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US`
      )
      .then((res) => {
        setvideo(res.data.results[0].key);
        console.log(video);
      });
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <YouTube
      className={styles.videoContainer}
      videoId={video}
      onReady={_onReady}
    />
  );
}
