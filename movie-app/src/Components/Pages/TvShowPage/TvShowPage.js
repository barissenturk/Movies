import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styles from "./TvShowPage.module.css";

import Pagination from "../../Pagination/Pagination";
import SearchBar from "../../SearchBar/SearchBar";
import Navigation from "../../Navigation/Navigation";
import nullImg from "../../../Icons/null-img.jpg";

export default function TvShowPage() {
  const [tvShows, setTvShows] = useState({});
  const [search, setSearch] = useState("");
  const [totalpage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  let api =
    search === ""
      ? `https://api.themoviedb.org/3/tv/popular?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=${currentPage}`
      : `https://api.themoviedb.org/3/search/tv?api_key=e106aa77a18cc7d63d4606b561bdda34&query=${search}`;

  useEffect(() => {
    fetchTvShows();
  }, [search, currentPage]);

  const fetchTvShows = useCallback(() => {
    axios.get(api).then((res) => {
      setTvShows(res.data.results);
      setTotalPage(res.data.total_pages);
      console.log(res.data);
    });
  }, [api]);

  console.log(search);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigationContainer}>
        <Navigation />
        <SearchBar setSearch={(text) => setSearch(text)} />
      </div>
      {tvShows.length > 0 &&
        tvShows.map((movie) => (
          <div className={styles.movieBox} key={movie.id}>
            <div className={styles.posterBox}>
              <img
                className={styles.poster}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                    : nullImg
                }
                alt="poster"
              />
              <div className={styles.overviewBox}>
                <div className={styles.title}>{movie.name}</div>
                <div className={styles.overview}>{movie.overview}</div>
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
