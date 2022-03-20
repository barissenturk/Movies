import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Navigation from "../../../Navigation/Navigation";
import Video from "../../../Video/Video";
import Overview from "../../../Overview/Overview";

import styles from "./MoviesDetailPage.module.css";

import nullImg from "../../../../Icons/null-img.jpg";
import star from "../../../../Icons/star.png";

export default function MoviesDetailPage() {
  const params = useParams();
  const [movie, SetMovie] = useState({});
  const [images, setImages] = useState({});
  const [movieGenres, SetMovieGenres] = useState({});
  const [subNavMenu, SetsubNavMenu] = useState(1);

  useEffect(() => {
    fetchDetail();
  }, []);

  let api = `https://api.themoviedb.org/3/movie/${params.id}?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&append_to_response=images&include_image_language=en,null`;

  const fetchDetail = async () => {
    await axios.get(api).then((res) => {
      SetMovie(res.data);
      SetMovieGenres(res.data.genres);
      setImages(res.data.images.backdrops);
      console.log(res.data.images.backdrops);
    });
  };
  console.log(subNavMenu);
  return (
    <div className={styles.detailContainer}>
      <div className={styles.header}>
        <img
          className={styles.backgroundImg}
          src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/themes/blockter/images/banner-bg.jpg"
          alt=""
        />
        <div className={styles.NavigationBar}>
          <Navigation />
        </div>
      </div>

      <div className={styles.trailAndOverwievContainer}>
        {/* <Video movieId={params.id} /> */}

        <div className={styles.posterContainer}>
          <img
            className={styles.poster}
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                : nullImg
            }
            alt="poster"
          />
        </div>
        <div className={styles.overwievContainer}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.star}>
            <img className={styles.starIcon} src={star} />
            {movie.vote_average} / 10
          </div>
          <div className={styles.trailLink}>
            <p className={styles.trailLinkText}>watch trailer </p>
          </div>
          <div className={styles.subNavMenuContainer}>
            <div
              className={subNavMenu === 1 ? styles.active : styles.subNavMenu}
              onClick={() => {
                SetsubNavMenu(1);
              }}
            >
              overview
            </div>
            <div
              className={subNavMenu === 2 ? styles.active : styles.subNavMenu}
              onClick={() => {
                SetsubNavMenu(2);
              }}
            >
              overview2
            </div>
            <div
              className={subNavMenu === 3 ? styles.active : styles.subNavMenu}
              onClick={() => {
                SetsubNavMenu(3);
              }}
            >
              overview3
            </div>
          </div>
          {subNavMenu == 1 ? (
            <Overview movie={movie} movieGenres={movieGenres} images={images} />
          ) : null}
        </div>
      </div>
      {/* <div className={styles.creditContainer}>Credit</div> */}
    </div>
  );
}
