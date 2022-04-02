import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "./TvCast.module.css";

export default function TvCast({ movieId, movie, movieGenres, runtime }) {
  const [cast, setCast] = useState({});
  const [noOfElement, setnoOfElement] = useState(8);

  const loadMore = () => {
    setnoOfElement(noOfElement + 8);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  let api = `https://api.themoviedb.org/3/tv/${movieId}/aggregate_credits?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&append_to_response=images&include_image_language=en,null`;

  const fetchDetail = async () => {
    await axios.get(api).then((res) => {
      setCast(res.data.cast);
    });
  };
  return (
    <div className={styles.castContainer}>
      <div className={styles.castBox}>
        {cast.length > 0 &&
          cast.slice(0, noOfElement).map((actor) => (
            <div className={styles.profileBox} key={actor.id}>
              <img
                alt="actor"
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
              />
              <p className={styles.actorName}>{actor.name} </p>
              <p className={styles.actorCharacter}>{actor.character} </p>
            </div>
          ))}
        {cast.length > noOfElement ? (
          <div className={styles.buttonBox}>
            <button className={styles.button} onClick={loadMore}>
              Load More
            </button>
          </div>
        ) : null}
      </div>
      <div className={styles.overviewSideInfoContainer}>
        <div className={styles.overviewSideInfo}>
          <h6>Title:</h6>
          {movie.name}
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
          {movie.first_air_date}
        </div>
        <div className={styles.overviewSideInfo}>
          <h6>Run Time:</h6>
          {runtime}m
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
