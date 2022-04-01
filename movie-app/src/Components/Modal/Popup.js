import React from "react";

import styles from "./Popup.module.css";
export default function Popup({ img, handleClose, numImg }) {
  return (
    <div className={numImg > 7 ? styles.popupBox : styles.popupBoxSpec}>
      <div className={styles.box}>
        <span className={styles.closeIcon} onClick={handleClose}>
          x
        </span>

        <img
          alt="backdropimg"
          className={styles.userImg}
          src={`https://image.tmdb.org/t/p/w500/` + img}
        />
      </div>
    </div>
  );
}
