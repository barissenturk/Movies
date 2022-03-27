import React, { useEffect } from "react";

import YouTube from "react-youtube";

import styles from "./VideoPopup.module.css";

export default function VideoPopup({ handleClose, teaserKey, video }) {
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  useEffect(() => {}, []);

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
              videoId={teaserKey}
              onReady={_onReady}
            />
          </div>
        </div>
      )}
    </div>
  );
}
