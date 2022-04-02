import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styles from "./TvShowPage.module.css";

import SearchBar from "../../SearchBar/SearchBar";
import Navigation from "../../Navigation/Navigation";
import TvDisplayBox from "./TvDisplayBox/TvDisplayBox";

export default function TvShowPage() {
  const [popularmovies, setPopularTvShow] = useState({});
  const [topRatedTvShows, setTopRatedTvShows] = useState({});
  const [onTvShows, setOnTvShows] = useState({});
  const [searchMovie, setSearchMovie] = useState([]);

  const [search, setSearch] = useState(" ");

  let topRatedTvShowsApi = `https://api.themoviedb.org/3/tv/top_rated?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`;
  let onTv = `https://api.themoviedb.org/3/tv/on_the_air?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`;
  let searchApi = `https://api.themoviedb.org/3/search/multi?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1&include_adult=false&query=${search}`;
  let popularTvShowsApi = `https://api.themoviedb.org/3/tv/popular?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`;

  useEffect(() => {
    fetchPopularTvShows();
    fetchTopRatedTvShows();
    fetchOnTvShows();
    fetchSearchApi();
  }, [search]);

  const fetchPopularTvShows = useCallback(() => {
    axios.get(popularTvShowsApi).then((res) => {
      setPopularTvShow(res.data.results);
    });
  }, [popularmovies]);
  const fetchTopRatedTvShows = useCallback(() => {
    axios.get(topRatedTvShowsApi).then((res) => {
      setTopRatedTvShows(res.data.results);
    });
  }, [topRatedTvShows]);
  const fetchOnTvShows = useCallback(() => {
    axios.get(onTv).then((res) => {
      setOnTvShows(res.data.results);
    });
  }, [onTvShows]);

  const fetchSearchApi = useCallback(() => {
    if (search !== " ") {
      axios.get(searchApi).then((res) => {
        setSearchMovie(res.data.results);
      });
    }
  }, [search]);

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
        <TvDisplayBox tvShows={popularmovies} />
        <h2 className={styles.categoryTitle}>Top Rated</h2>
        <TvDisplayBox tvShows={topRatedTvShows} />
        <h2 className={styles.categoryTitle}>On Tv</h2>
        <TvDisplayBox tvShows={onTvShows} />
      </div>
    </div>
  );
}
