import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import Navigation from "../../../Navigation/Navigation";
import VideoPopup from "../../../VideoPopup/VideoPopup";

import styles from "./TvShowDetail.module.css";
import star from "../../../../Icons/star.png";
import nullImg from "../../../../Icons/null-img.jpg";
import TvShowDetailPageOverViewPage from "../TvShowDetailPage/TvShowsDetailOverView/TvShowsDetailOverViewPage";
import TvCast from "./TvCast/TvCast";
import Seasons from "./TvShowsSeasons/Seasons";

export default function TvShowDetailPage() {
  const params = useParams();
  const [tvShows, setTvShows] = useState({});
  const [images, setImages] = useState({});
  const [movieGenres, setMovieGenres] = useState({});
  const [subNavMenu, setsubNavMenu] = useState(1);
  const [backdrop, setBackdrop] = useState();
  const [video, setvideo] = useState();
  const [teaser, setteaser] = useState();
  const [runtime, setRuntime] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getTeaser = () => {
    setteaser(video[video.length - 1].key);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  // const FetchSimilarMovie = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&page=1`
  //     )
  //     .then((res) => {
  //       setSimilarMovie(res.data.results);
  //     });
  // };

  // const fetchTrail = async () => {
  //   await axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US`
  //     )
  //     .then((res) => {
  //       setvideo(res.data.results);
  //     });
  // };

  let api = `https://api.themoviedb.org/3/tv/${params.id}?api_key=e106aa77a18cc7d63d4606b561bdda34&language=en-US&append_to_response=images&include_image_language=en,null`;

  const fetchDetail = async () => {
    await axios.get(api).then((res) => {
      setTvShows(res.data);
      setMovieGenres(res.data.genres);
      setImages(res.data.images.backdrops);
      setBackdrop(res.data.images.backdrops[0]);
      setRuntime(res.data.episode_run_time[0]);
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

        <div className={styles.NavigationBar}>
          <Navigation />
        </div>
      </div>

      <div className={styles.trailAndOverwievContainer}>
        <div className={styles.posterContainer}>
          <img
            className={styles.poster}
            src={
              tvShows.backdrop_path
                ? `https://image.tmdb.org/t/p/w400/` + tvShows.poster_path
                : nullImg
            }
            alt="poster"
          />
        </div>
        <div className={styles.overwievContainer}>
          <div className={styles.title}>{tvShows.name}</div>
          <div className={styles.star}>
            <img className={styles.starIcon} alt="rate" src={star} />
            {tvShows.vote_average} / 10
          </div>
          <div
            className={styles.trailLink}
            onClick={() => {
              togglePopup();
              getTeaser();
            }}
          >
            <p className={styles.trailLinkText}>watch trailer </p>
            {/* {isOpen ? (
              <VideoPopup
                movieId={params.id}
                handleClose={togglePopup}
                teaserKey={teaser}
                video={video}
              />
            ) : null} */}
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
              Seasons
            </div>
          </div>
          {subNavMenu === 1 ? (
            <TvShowDetailPageOverViewPage
              movie={tvShows}
              movieGenres={movieGenres}
              images={images}
              runtime={runtime}
            />
          ) : null}
          {subNavMenu === 2 ? (
            <TvCast
              movieId={params.id}
              movie={tvShows}
              movieGenres={movieGenres}
              runtime={runtime}
            />
          ) : null}

          {subNavMenu === 3 ? <Seasons movie={tvShows} /> : null}
        </div>
      </div>
    </div>
  );
}
