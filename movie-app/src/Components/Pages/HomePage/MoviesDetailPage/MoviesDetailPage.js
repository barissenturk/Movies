import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Navigation from "../../../Navigation/Navigation";
import Overview from "../Overview/Overview";

import styles from "./MoviesDetailPage.module.css";

import nullImg from "../../../../Icons/null-img.jpg";
import star from "../../../../Icons/star.png";
import VideoPopup from "../../../VideoPopup/VideoPopup";
import Cast from "../Cast/Cast";
import SimilarMovies from "../SimilarMovies/SimilarMovies";

export default function MoviesDetailPage() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [images, setImages] = useState({});
  const [movieGenres, setMovieGenres] = useState({});
  const [subNavMenu, setsubNavMenu] = useState(1);
  const [backdrop, setBackdrop] = useState();
  const [video, setvideo] = useState();
  const [teaser, setteaser] = useState();
  const [similarMovie, setSimilarMovie] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getTeaser = () => {
    setteaser(video[video.length - 1].key);
  };

  useEffect(() => {
    fetchDetail();
    fetchTrail();
    FetchSimilarMovie();
  }, []);

  const FetchSimilarMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`
      )
      .then((res) => {
        setSimilarMovie(res.data.results);
      });
  };

  const fetchTrail = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US`
      )
      .then((res) => {
        setvideo(res.data.results);
      });
  };

  let api = `https://api.themoviedb.org/3/movie/${params.id}?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&append_to_response=images&include_image_language=en,null`;

  const fetchDetail = async () => {
    await axios.get(api).then((res) => {
      setMovie(res.data);
      setMovieGenres(res.data.genres);
      setImages(res.data.images.backdrops);
      setBackdrop(res.data.images.backdrops[0]);
    });
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.header}>
        {backdrop === undefined || null ? (
          <img
            className={styles.backgroundImg}
            src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/themes/blockter/images/banner-bg.jpg"
            alt=""
          />
        ) : (
          <img
            className={styles.backgroundImg}
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop.file_path}`}
            alt=""
          />
        )}

        {/* (
         
        )} */}
        <div className={styles.NavigationBar}>
          <Navigation />
        </div>
      </div>

      <div className={styles.trailAndOverwievContainer}>
        <div className={styles.posterContainer}>
          <img
            className={styles.poster}
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w400/` + movie.poster_path
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
          <div
            className={styles.trailLink}
            onClick={() => {
              togglePopup();
              getTeaser();
            }}
          >
            <p className={styles.trailLinkText}>watch trailer </p>
            {isOpen ? (
              <VideoPopup
                movieId={params.id}
                handleClose={togglePopup}
                teaserKey={teaser}
                video={video}
              />
            ) : null}
          </div>
          <div className={styles.subNavMenuContainer}>
            <div
              className={subNavMenu === 1 ? styles.active : styles.subNavMenu}
              onClick={() => {
                setsubNavMenu(1);
              }}
            >
              overview
            </div>
            <div
              className={subNavMenu === 2 ? styles.active : styles.subNavMenu}
              onClick={() => {
                setsubNavMenu(2);
              }}
            >
              cast
            </div>
            <div
              className={subNavMenu === 3 ? styles.active : styles.subNavMenu}
              onClick={() => {
                setsubNavMenu(3);
              }}
            >
              Recommendations
            </div>
          </div>
          {subNavMenu == 1 ? (
            <Overview movie={movie} movieGenres={movieGenres} images={images} />
          ) : null}
          {subNavMenu == 2 ? (
            <Cast movieId={params.id} movie={movie} movieGenres={movieGenres} />
          ) : null}
          {subNavMenu == 3 ? (
            <SimilarMovies similarMovie={similarMovie} />
          ) : null}
        </div>
      </div>
      {/* <div className={styles.creditContainer}>Credit</div> */}
    </div>
  );
}
