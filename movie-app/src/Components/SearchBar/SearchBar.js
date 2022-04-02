import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

import nullimg from "../../Icons/null-img.jpg";
export default function SearchBar({ setSearch, search, searchMovie }) {
  const mediaType = (media) => {
    switch (media.media_type) {
      case "movie":
        return (
          <Link
            className={styles.searchInfoContainer}
            to={`/${media.id}/movieDetail`}
            key={media.id}
          >
            <div className={styles.searchInfoBox}>
              <div className={styles.searchImgContainer}>
                <img
                  alt="movie"
                  className={styles.searchImg}
                  src={
                    media.poster_path != null
                      ? `https://image.tmdb.org/t/p/w200/` + media.poster_path
                      : nullimg
                  }
                />
              </div>
              <div className={styles.seachTitle}>
                {media.original_title}
                <p className={styles.releasedDate}>{media.release_date}</p>
              </div>
            </div>
          </Link>
        );
      case "tv":
        return (
          <Link
            className={styles.searchInfoContainer}
            to={`/${media.id}/tvDetail`}
            key={media.id}
          >
            <div className={styles.searchInfoBox}>
              <div className={styles.searchImgContainer}>
                <img
                  alt="tv"
                  className={styles.searchImg}
                  src={
                    media.poster_path != null
                      ? `https://image.tmdb.org/t/p/w200/` + media.poster_path
                      : nullimg
                  }
                />
              </div>
              <div className={styles.seachTitle}>
                {media.name}
                <p className={styles.releasedDate}>{media.first_air_date}</p>
              </div>
            </div>
          </Link>
        );
      case "person":
        return (
          <Link
            className={styles.searchInfoContainer}
            to={`/${media.id}/movieDetail`}
            key={media.id}
          >
            <div className={styles.searchInfoBox}>
              <div className={styles.searchImgContainer}>
                <img
                  alt="person"
                  className={styles.searchImg}
                  src={
                    media.profile_path != null
                      ? `https://image.tmdb.org/t/p/w200/` + media.profile_path
                      : nullimg
                  }
                />
              </div>
              <div className={styles.seachTitle}>{media.name}</div>
            </div>
          </Link>
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles.searchBarContent}>
      <div>
        <div className={styles.searchBarBox}>
          <input
            className={styles.searchBar}
            placeholder="Search..."
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className={styles.searchResultBox}>
          {search !== "" ? (
            <div>
              {searchMovie != null
                ? searchMovie.map((movie) => mediaType(movie))
                : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
