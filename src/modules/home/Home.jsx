import { useState } from "react";
import MoviesModal from "../movies/MoviesModal";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeHighlight from "./HomeHighlight";
import css from "./css/home.module.css";

export default function Home() {
  const [ movieId, setMovieId ] = useState(null);
  const movies = [
    {
      id: 44362,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "action",
      overview:"descrição",
      release_data:"2024-05-31",
      vote_average: 9.2

    },
    {
      id: 44363,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "anime",
      overview:"descrição",
      release_data:"2024-05-31",
      vote_average: 9.2
    },
  ];
  const moviesRow = movies.map((movie, _) => (
    <img
      src={movie.poster_path}
      onClick={() => handleClick(movie.id)}
      className={css.movieItem}
      key={movie.id}
    />
  ));
  const actionMovies = movies.filter((movie) => movie.gender == "action");
  const actionRow = actionMovies.map((movie, _) => (
    <img
      src={movie.poster_path}
      onClick={() => handleClick(movie.id)}
      className={css.movieItem}
      key={movie.id}
    />
  ));
  const adventureMovies = movies.filter((movie) => movie.gender == "adventure");
  const adventureRow = adventureMovies.map((movie, _) => (
    <img
      src={movie.poster_path}
      onClick={() => handleClick(movie.id)}
      className={css.movieItem}
      key={movie.id}
    />
  ));
  const romanceMovies = movies.filter((movie) => movie.gender == "romance");
  const romanceRow = romanceMovies.map((movie, _) => (
    <img
      src={movie.poster_path}
      onClick={() => handleClick(movie.id)}
      className={css.movieItem}
      key={movie.id}
    />
  ));
  const dramaMovies = movies.filter((movie) => movie.gender == "drama");
  const dramaRow = dramaMovies.map((movie, _) => (
    <img
      src={movie.poster_path}
      onClick={() => handleClick(movie.id)}
      className={css.movieItem}
      key={movie.id}
    />
  ));
  const animeMovies = movies.filter((movie) => movie.gender == "anime");
  const animeRow = animeMovies.map((movie, _) => (
    <img
      src={movie.poster_path}
      onClick={() => handleClick(movie.id)}
      className={css.movieItem}
      key={movie.id}
    />
  ));
  const handleClick = (id) => {
    setMovieId(1);
  };
  const closeModal = () =>{
    setMovieId(null);
  }
  return (
    <>
      <HomeHeader />
      <HomeHighlight />
      <div className={css.container}>
        {movieId ? <MoviesModal id={{movieId, closeModal}}/> : ""}
        <div className={css.lists}>
          <h3>Novidades na Netflix</h3>
          <div className={css.leftArrowContainer}>
            <img src="../../../public/arrow.png" className={css.leftArrow} />
          </div>
          <div className={css.moviesRow}>
            <ul>{moviesRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img src="../../../public/arrow.png" className={css.rightArrow} />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Ação</h3>
          <div className={css.leftArrowContainer}>
            <img src="../../../public/arrow.png" className={css.leftArrow} />
          </div>
          <div className={css.moviesRow}>
            <ul>{actionRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img src="../../../public/arrow.png" className={css.rightArrow} />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Aventura</h3>
          <div className={css.leftArrowContainer}>
            <img src="../../../public/arrow.png" className={css.leftArrow} />
          </div>
          <div className={css.moviesRow}>
            <ul>{adventureRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img src="../../../public/arrow.png" className={css.rightArrow} />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Romance</h3>
          <div className={css.leftArrowContainer}>
            <img src="../../../public/arrow.png" className={css.leftArrow} />
          </div>
          <div className={css.moviesRow}>
            <ul>{romanceRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img src="../../../public/arrow.png" className={css.rightArrow} />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Drama</h3>
          <div className={css.leftArrowContainer}>
            <img src="../../../public/arrow.png" className={css.leftArrow} />
          </div>
          <div className={css.moviesRow}>
            <ul>{dramaRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img src="../../../public/arrow.png" className={css.rightArrow} />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Anime</h3>
          <div className={css.leftArrowContainer}>
            <img src="../../../public/arrow.png" className={css.leftArrow} />
          </div>
          <div className={css.moviesRow}>
            <ul>{animeRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img src="../../../public/arrow.png" className={css.rightArrow} />
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  );
}
