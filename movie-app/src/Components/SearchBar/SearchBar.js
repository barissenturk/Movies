import React from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ setSearch, search }) {
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
          {search !== "" ? <div>sadsa</div> : null}
        </div>
      </div>
    </div>
  );
}
