import React, { useState, useEffect } from "react";

import YouTube from "react-youtube";
import axios from "axios";

import styles from "./VideoPopup.module.css";

export default function VideoPopup({ movieId, handleClose }) {
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

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
      });
  };

  return (
    <div>
      {video != null && (
        <div className={styles.popupBox}>
          <div className={styles.box}>
            <span className={styles.closeIcon} onClick={handleClose}>
              x
            </span>

            <YouTube
              className={styles.videoContainer}
              videoId={video}
              onReady={_onReady}
            />
          </div>
        </div>
      )}
    </div>
  );
}
