import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styles from "./HomePage.module.css";
import Navigation from "../../Navigation/Navigation";
import SearchBar from "../../SearchBar/SearchBar";
import nullImg from "../../../Icons/null-img.jpg";
import Pagination from "../../Pagination/Pagination";

export default function Movies() {
  const [movies, SetMovies] = useState({});
  const [search, setSearch] = useState("");
  const [totalpage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  let api =
    search === ""
      ? `https://api.themoviedb.org/3/movie/popular?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=${currentPage}`
      : `https://api.themoviedb.org/3/search/movie?api_key=e106aa77a18cc7d63d4606b561bdda34&query=${search}`;

  useEffect(() => {
    fetchMovies();
  }, [search, currentPage]);

  const fetchMovies = useCallback(() => {
    axios.get(api).then((res) => {
      SetMovies(res.data.results);
      setTotalPage(res.data.total_pages);
      console.log(res.data);
    });
  }, [api]);
  console.log(currentPage);
  console.log(search);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigationContainer}>
        <Navigation />
        <SearchBar setSearch={(text) => setSearch(text)} />
      </div>
      {movies.length > 0 &&
        movies.map((movie) => (
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
                <div className={styles.title}>{movie.title}</div>
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
