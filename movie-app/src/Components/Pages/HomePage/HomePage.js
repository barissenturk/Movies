import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";
import styles from "./HomePage.module.css";

import Navigation from "../../Navigation/Navigation";
import SearchBar from "../../SearchBar/SearchBar";

import MoviesDisplayBox from "./MoviesDisplayBox/MoviesDisplayBox";

export default function Movies() {
  const [popularmovies, setPopularMovies] = useState({});
  const [topRatedmovies, setTopRatedMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [searchMovie, setSearchMovie] = useState([]);

  const [search, setSearch] = useState("");

  let popularMoviesApi = `https://api.themoviedb.org/3/movie/popular?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`;
  let topRatedMoviesApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`;
  let upcomingMoviesApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`;
  let searchApi = `https://api.themoviedb.org/3/search/multi?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1&include_adult=false&query=${search}`;

  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies();
    fetchSearchApi();
  }, [
    popularMoviesApi,
    topRatedMoviesApi,
    upcomingMoviesApi,
    searchApi,
    search,
  ]);

  const fetchPopularMovies = useCallback(() => {
    axios.get(popularMoviesApi).then((res) => {
      setPopularMovies(res.data.results);
    });
  }, [popularMoviesApi]);
  const fetchTopRatedMovies = useCallback(() => {
    axios.get(topRatedMoviesApi).then((res) => {
      setTopRatedMovies(res.data.results);
    });
  }, [topRatedMoviesApi]);
  const fetchUpcomingMovies = useCallback(() => {
    axios.get(upcomingMoviesApi).then((res) => {
      setUpcomingMovies(res.data.results);
    });
  }, [upcomingMoviesApi]);
  const fetchSearchApi = useCallback(() => {
    if (search !== "") {
      axios.get(searchApi).then((res) => {
        setSearchMovie(res.data.results);
      });
    }
  }, [search, searchApi]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigationContainer}>
        <Navigation />
        <SearchBar
          setSearch={(text) => setSearch(text)}
          search={search}
          searchMovie={searchMovie}
        />
      </div>

      <div className={styles.movieContainer}>
        <h2 className={styles.categoryTitle}>What's Popular</h2>
        <MoviesDisplayBox movies={popularmovies} />
        <h2 className={styles.categoryTitle}>Top Rated</h2>
        <MoviesDisplayBox movies={topRatedmovies} />
        <h2 className={styles.categoryTitle}>Upcoming</h2>
        <MoviesDisplayBox movies={upcomingMovies} />
      </div>
    </div>
  );
}
