import React from "react";

import { Link } from "react-router-dom";
import styles from "./TvDisplayBox.module.css";

import star from "../../../../Icons/star.png";
import nullImg from "../../../../Icons/null-img.jpg";

export default function TvDisplayBox({ tvShows }) {
  return (
    <div className={styles.popularmovieContainer}>
      {tvShows.length > 0 &&
        tvShows.map((tvShows) => (
          <div className={styles.movieBox} key={tvShows.id}>
            <Link className={styles.link} to={`/${tvShows.id}/tvDetail`}>
              <div className={styles.posterBox}>
                <img
                  className={styles.poster}
                  src={
                    tvShows.poster_path
                      ? `https://image.tmdb.org/t/p/w200/` + tvShows.poster_path
                      : nullImg
                  }
                  alt="poster"
                />
                <h2 className={styles.title}>{tvShows.name}</h2>
                <p className={styles.subcontentBox}>
                  Rating:&nbsp;
                  <img className={styles.starIcon} alt="rate" src={star} />
                  {tvShows.vote_average.toFixed(1)} / 10 &nbsp; &nbsp;
                  {tvShows.first_air_date}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
