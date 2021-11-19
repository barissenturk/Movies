import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./HomePage.module.css";
import Navigation from "../Navigation/Navigation";
export default function Movies() {
  const [movies, SetMovies] = useState({});

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .get(
        `popular?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=2`
      )
      .then((res) => {
        SetMovies(res.data.results);
        console.log(res.data);
      });
  };

  return (
    <div className={styles.mainContainer}>
      <Navigation />
      {movies.length > 0 &&
        movies.map((movie) => (
          <div className={styles.movieBox} key={movie.id}>
            <div className={styles.posterBox}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                alt="poster"
              />
              <div className={styles.overviewBox}>
                <div className={styles.title}>{movie.title}</div>
                {/* <div className={styles.rate}>{movie.vote_average}</div> */}
                <div className={styles.overview}>{movie.overview}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
