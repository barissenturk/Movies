import React from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ setSearch }) {
  return (
    <div className={styles.searchBarContent}>
      <input
        className={styles.searchBar}
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
