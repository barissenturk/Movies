import React from "react";
import { Link } from "react-router-dom";

import star from "../../../../Icons/star.png";
import nullImg from "../../../../Icons/null-img.jpg";
import styles from "./MoviesDisplayBox.module.css";

export default function MoviesDisplayBox({ movies }) {
  return (
    <div className={styles.popularmovieContainer}>
      {movies.length > 0 &&
        movies.map((movie) => (
          <div className={styles.movieBox} key={movie.id}>
            <Link className={styles.link} to={`/${movie.id}/movieDetail`}>
              <div className={styles.posterBox}>
                <img
                  className={styles.poster}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200/` + movie.poster_path
                      : nullImg
                  }
                  alt="poster"
                />
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.subcontentBox}>
                  Rating:&nbsp;{" "}
                  <img className={styles.starIcon} alt="rate" src={star} />
                  {movie.vote_average.toFixed(1)} / 10 &nbsp; &nbsp;
                  {movie.release_date}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
