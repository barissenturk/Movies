import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styles from "./ActorsPage.module.css";

import Navigation from "../../Navigation/Navigation";
import SearchBar from "../../SearchBar/SearchBar";
import nullImg from "../../../Icons/null-img.jpg";
import Pagination from "../../Pagination/Pagination";

export default function ActorsPage() {
  const [actors, setActors] = useState({});
  const [search, setSearch] = useState("");
  const [totalpage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  let api =
    search === ""
      ? `https://api.themoviedb.org/3/person/popular?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=${currentPage}`
      : `https://api.themoviedb.org/3/search/person?api_key=e106aa77a18cc7d63d4606b561bdda34&query=${search}`;

  useEffect(() => {
    fetchActors();
  }, [search, currentPage]);

  const fetchActors = useCallback(() => {
    axios.get(api).then((res) => {
      setActors(res.data.results);
      setTotalPage(res.data.total_pages);
    });
  }, [api]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigationContainer}>
        <Navigation />
        <SearchBar setSearch={(text) => setSearch(text)} />
      </div>
      {actors.length > 0 &&
        actors.map((actor) => (
          <div className={styles.movieBox} key={actor.id}>
            <div className={styles.posterBox}>
              <img
                className={styles.poster}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/` + actor.profile_path
                    : nullImg
                }
                alt="poster"
              />
              <div className={styles.overviewBox}>
                <div className={styles.title}>{actor.name}</div>
                <div className={styles.overview}>{actor.overview}</div>
              </div>
            </div>
          </div>
        ))}
      <Pagination
        totalpage={totalpage}
        currentPage={currentPage}
        setCurrentPage={(number) => setCurrentPage(number)}
      />
    </div>
  );
}
