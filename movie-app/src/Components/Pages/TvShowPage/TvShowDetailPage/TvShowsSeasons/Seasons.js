import React from "react";
import dateFormat from "dateformat";

import styles from "./Seasons.module.css";

export default function Seasons({ movie }) {
  return (
    <div className={styles.seasonContainer}>
      {movie.seasons.map((season) => (
        <div className={styles.seasonCardBox}>
          {season.season_number > 0 && (
            <div className={styles.seasonsCard}>
              <div className={styles.seasonCardImgBox}>
                {season.poster_path != null ? (
                  <img
                    className={styles.seasonCardImg}
                    alt="season"
                    src={
                      "https://www.themoviedb.org/t/p/w130_and_h195_bestv2/" +
                      season.poster_path
                    }
                  />
                ) : null}
              </div>
              <div className={styles.seasonCardText}>
                <h1>Season {season.season_number}</h1>
                <h2> {season.episode_count} Episodes</h2>
                {season.overview !== "" ? (
                  <p>{season.overview}</p>
                ) : (
                  <p>
                    Season {season.season_number} premiered on &nbsp;
                    {dateFormat(season.air_date, "mmmm d, yyyy")}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
