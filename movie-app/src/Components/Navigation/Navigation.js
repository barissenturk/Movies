import React from "react";
import styles from "./Navigation.module.css";
import Logo from "../../Icons/movieLogo.png";
export default function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <img className={styles.logo} src={Logo} alt="logo" />

      <div className={styles.navBox}>
        <a href="#">Home</a> <a href="#">Tv Shows</a> <a href="#">Actors</a>{" "}
        <input className={styles.searchBar} placeholder="Search..." />
      </div>
    </div>
  );
}
