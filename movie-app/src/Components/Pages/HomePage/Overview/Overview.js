import React, { useState } from "react";

import Popup from "../../../Modal/Popup";
import styles from "./Overview.module.css";

export default function Overview({ movie, movieGenres, images }) {
  const [noOfElement, setnoOfElement] = useState(12);
  const [isOpen, setIsOpen] = useState(false);
  const [img, setimg] = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const loadMore = () => {
    setnoOfElement(noOfElement + 6);
  };

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overview}>
        {movie.overview}
        <div className={styles.backdropImgContainer}>
          <h2 className={styles.backdropImgContainerTitle}>media</h2>
          <div className={styles.backdropImgBox}>
            {images.length > 0 &&
              images.slice(0, noOfElement).map((image) => (
                <div
                  className={styles.popupImgBox}
                  onClick={() => {
                    togglePopup();
                    setimg(image.file_path);
                  }}
                >
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/w500/` + image.file_path}
                  />
                  {isOpen ? (
                    <Popup
                      img={img}
                      numImg={images.length}
                      handleClose={togglePopup}
                      id={img}
                    />
                  ) : null}
                </div>
              ))}

            {images.length > noOfElement ? (
              <div className={styles.buttonBox}>
                <button className={styles.button} onClick={loadMore}>
                  Load More
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.overviewSideInfoContainer}>
        <div className={styles.overviewSideInfo}>
          <h6>Title:</h6>
          {movie.original_title}
        </div>
        <div className={styles.overviewSideInfo}>
          <h6>Genres:</h6>
          <div className={styles.genres}>
            {movieGenres.length > 0 &&
              movieGenres.map((moviegenre) => <p>{moviegenre.name}</p>)}
          </div>
        </div>
        <div className={styles.overviewSideInfo}>
          <h6>Release Date:</h6>
          {movie.release_date}
        </div>
        <div className={styles.overviewSideInfo}>
          <h6>Run Time:</h6>
          {movie.runtime}m
        </div>
        <div className={styles.overviewSideInfo}>
          <h6>Original Language:</h6>
          {movie.original_language}
        </div>
        <div className={styles.overviewSideInfo}>
          <h6>Tagline:</h6>
          {movie.tagline}
        </div>
      </div>
    </div>
  );
}
