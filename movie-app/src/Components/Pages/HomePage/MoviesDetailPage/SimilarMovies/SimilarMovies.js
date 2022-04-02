import React, { useState } from "react";

import star from "../../../../../Icons/star.png";
import styles from "./SimilarMovies.module.css";

export default function SimilarMovies({ similarMovie }) {
  const [noOfElement, setnoOfElement] = useState(5);

  const loadMore = () => {
    setnoOfElement(noOfElement + 5);
  };

  return (
    <div className={styles.similarMoviesContainer}>
      <div className={styles.similarMoviesBox}>
        {similarMovie.length > 0 &&
          similarMovie.slice(0, noOfElement).map((movie) => (
            <div className={styles.moviesBox} key={movie.id}>
              <a href={`/${movie.id}/movieDetail`}>
                <img
                  alt="movie"
                  className={styles.moviesPoster}
                  src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
                />
              </a>
              <div className={styles.contentsContainer}>
                <h2>{movie.original_title}</h2>
                <p className={styles.overviewBox}>{movie.overview}</p>
                <div className={styles.subcontentcontainer}>
                  <p className={styles.subcontentBox}>
                    Rating:&nbsp;{" "}
                    <img className={styles.starIcon} alt="rate" src={star} />
                    {movie.vote_average.toFixed(1)} / 10
                  </p>
                  <p className={styles.subcontentBox}>
                    Original language:&nbsp;{" "}
                    {movie.original_language.toUpperCase()}
                  </p>
                  <p className={styles.subcontentBox}>
                    Relase date:&nbsp;
                    {movie.release_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {similarMovie.length > noOfElement ? (
          <div className={styles.buttonBox}>
            <button className={styles.button} onClick={loadMore}>
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
