import axios from "axios";
import React, { useState, useEffect } from "react";

import styles from "./SimilarMovies.module.css";

export default function SimilarMovies({ similarMovie }) {
  console.log(similarMovie);
  return (
    <div>
      {similarMovie.length > 0 &&
        similarMovie.map((movie) => (
          <div>
            <img
              src={
                `https://image.tmdb.org/t/p/w250_and_h141_face/` +
                movie.poster_path
              }
            />
          </div>
        ))}
    </div>
  );
}
