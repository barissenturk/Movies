import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
export default function SearchBar({ setSearch, search, searchMovie }) {
  const mediaType = (media) => {
    switch (media.media_type) {
      case "movie":
        return (
          <Link to={`/${media.id}/movieDetail`} key={media.id}>
            {media.original_title}
          </Link>
        );
      case "tv":
        return <div key={media.id}>{media.name}</div>;
      case "person":
        return <div key={media.id}>{media.name}</div>;
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
