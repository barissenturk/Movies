import React, { useState } from "react";

import styles from "./Overview.module.css";

export default function Overview({ movie, movieGenres, images }) {
  const [noOfElement, setnoOfElement] = useState(12);

  const loadMore = () => {
    setnoOfElement(noOfElement + 6);
  };
  console.log(images.length);
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overview}>
        {movie.overview}
        <div className={styles.backdropImgContainer}>
          <h2 className={styles.backdropImgContainer}>media</h2>
          {images.length > 0 &&
            images
              .slice(0, noOfElement)
              .map((image) => (
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w500/` + image.file_path}
                />
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
