import { useEffect, useState } from "react";
import MoviesModal from "../movies/MoviesModal";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeHighlight from "./HomeHighlight";
import css from "./css/home.module.css";
import axios from "axios";

export default function Home() {
  const [movieContent, setMovieId] = useState(null);
  const [movies, setMovies] = useState([]);
  const fetchMovies = () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTBhNDAxZDg1MGRkMmUxMjc2MTA4MGQ1Nzk1ZDA2YSIsIm5iZiI6MTcyNDY2OTcwMy4yMjg0MjUsInN1YiI6IjY2OWVmOGVmZGE5NGU3Y2VkMzEwMjg5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GvEZl79DBDca0u9MGohPKKr6fAdGD3vFrL8zPE1oglQ",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, [movies]);
  const [rowLocation, setRowLocation] = useState(0);
  const handleRowLocation = (direction) => {
    switch (direction) {
      case "minus":
        rowLocation === 0 ? setRowLocation(0) : setRowLocation(rowLocation - 1);
        break;
      case "plus":
        rowLocation === 12
          ? setRowLocation(12)
          : setRowLocation(rowLocation + 1);
    }
  };
  const [rowTwoLocation, setRowTwoLocation] = useState(0);
  const handleRowTwoLocation = (direction) => {
    switch (direction) {
      case "minus":
        rowTwoLocation === 0
          ? setRowTwoLocation(0)
          : setRowTwoLocation(rowTwoLocation - 1);
        break;
      case "plus":
        rowTwoLocation === 12
          ? setRowTwoLocation(12)
          : setRowTwoLocation(rowTwoLocation + 1);
    }
  };
  const [rowThreeLocation, setRowThreeLocation] = useState(0);
  const handleRowThreeLocation = (direction) => {
    switch (direction) {
      case "minus":
        rowThreeLocation === 0
          ? setRowThreeLocation(0)
          : setRowThreeLocation(rowThreeLocation - 1);
        break;
      case "plus":
        rowThreeLocation === 12
          ? setRowThreeLocation(12)
          : setRowThreeLocation(rowThreeLocation + 1);
    }
  };
  const [rowFourthLocation, setRowFourthLocation] = useState(0);
  const handleRowFourthLocation = (direction) => {
    switch (direction) {
      case "minus":
        rowFourthLocation === 0
          ? setRowFourthLocation(0)
          : setRowFourthLocation(rowFourthLocation - 1);
        break;
      case "plus":
        rowFourthLocation === 12
          ? setRowFourthLocation(12)
          : setRowFourthLocation(rowFourthLocation + 1);
    }
  };
  const [rowFiveLocation, setRowFiveLocation] = useState(0);
  const handleRowFiveLocation = (direction) => {
    switch (direction) {
      case "minus":
        rowFiveLocation === 0
          ? setRowFiveLocation(0)
          : setRowFiveLocation(rowFiveLocation - 1);
        break;
      case "plus":
        rowFiveLocation === 12
          ? setRowFiveLocation(12)
          : setRowFiveLocation(rowFiveLocation + 1);
    }
  };
  const [rowSixLocation, setRowSixLocation] = useState(0);
  const handleRowSixLocation = (direction) => {
    switch (direction) {
      case "minus":
        rowSixLocation === 0
          ? setRowSixLocation(0)
          : setRowSixLocation(rowSixLocation - 1);
        break;
      case "plus":
        rowSixLocation === 12
          ? setRowSixLocation(12)
          : setRowSixLocation(rowSixLocation + 1);
    }
  };
  const moviesRow = movies.map((movie, index) => {
    if (index >= rowLocation && index < rowLocation + 8) {
      return (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          onClick={() => handleClick(movie)}
          className={css.movieItem}
          key={movie.id}
        />
      );
    }
  });
  const actionRow = movies.map((movie, index) => {
    if (index >= rowTwoLocation && index < rowTwoLocation + 8) {
      return (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          onClick={() => handleClick(movie)}
          className={css.movieItem}
          key={movie.id}
        />
      );
    }
  });
  const adventureRow = movies.map((movie, index) => {
    if (index >= rowThreeLocation && index < rowThreeLocation + 8) {
      return (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          onClick={() => handleClick(movie)}
          className={css.movieItem}
          key={movie.id}
        />
      );
    }
  });
  const romanceRow = movies.map((movie, index) => {
    if (index >= rowFourthLocation && index < rowFourthLocation + 8) {
      return (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          onClick={() => handleClick(movie)}
          className={css.movieItem}
          key={movie.id}
        />
      );
    }
  });
  const dramaRow = movies.map((movie, index) => {
    if (index >= rowFiveLocation && index < rowFiveLocation + 8) {
      return (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          onClick={() => handleClick(movie)}
          className={css.movieItem}
          key={movie.id}
        />
      );
    }
  });
  const animeRow = movies.map((movie, index) => {
    if (index >= rowSixLocation && index < rowSixLocation + 8) {
      return (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          onClick={() => handleClick(movie)}
          className={css.movieItem}
          key={movie.id}
        />
      );
    }
  });
  const handleClick = (movieProps) => {
    setMovieId(movieProps);
  };
  const closeModal = () => {
    setMovieId(null);
  };
  return (
    <>
      <HomeHeader />
      <HomeHighlight />
      <div className={css.container}>
        {movieContent ? (
          <MoviesModal movieProps={{ movieContent, closeModal }} />
        ) : (
          ""
        )}
        <div className={css.lists}>
          <h3>Novidades na Netflix</h3>
          <div className={css.leftArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowLocation("minus")}
              className={css.leftArrow}
            />
          </div>
          <div className={css.moviesRow}>
            <ul>{moviesRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowLocation("plus")}
              className={css.rightArrow}
            />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Ação</h3>
          <div className={css.leftArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowTwoLocation("minus")}
              className={css.leftArrow}
            />
          </div>
          <div className={css.moviesRow}>
            <ul>{actionRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowTwoLocation("plus")}
              className={css.rightArrow}
            />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Aventura</h3>
          <div className={css.leftArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowThreeLocation("minus")}
              className={css.leftArrow}
            />
          </div>
          <div className={css.moviesRow}>
            <ul>{adventureRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowThreeLocation("plus")}
              className={css.rightArrow}
            />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Romance</h3>
          <div className={css.leftArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowFourthLocation("minus")}
              className={css.leftArrow}
            />
          </div>
          <div className={css.moviesRow}>
            <ul>{romanceRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowFourthLocation("plus")}
              className={css.rightArrow}
            />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Drama</h3>
          <div className={css.leftArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowFiveLocation("minus")}
              className={css.leftArrow}
            />
          </div>
          <div className={css.moviesRow}>
            <ul>{dramaRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowFiveLocation("plus")}
              className={css.rightArrow}
            />
          </div>
        </div>
        <div className={css.lists}>
          <h3>Anime</h3>
          <div className={css.leftArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowSixLocation("minus")}
              className={css.leftArrow}
            />
          </div>
          <div className={css.moviesRow}>
            <ul>{animeRow}</ul>
          </div>
          <div className={css.rightArrowContainer}>
            <img
              src="../../../public/arrow.png"
              onClick={() => handleRowSixLocation("plus")}
              className={css.rightArrow}
            />
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  );
}
