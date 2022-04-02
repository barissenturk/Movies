import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navBox}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.Link)}
          to="/"
        >
          Movies
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.Link)}
          to="/tvshow"
        >
          Tv Shows
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.Link)}
          to="/actors"
        >
          Actors
        </NavLink>
      </div>
    </div>
  );
}
