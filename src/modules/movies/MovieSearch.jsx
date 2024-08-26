import { useEffect, useState } from "react";
import HomeFooter from "../home/HomeFooter";
import HomeHeader from "../home/HomeHeader";
import SearchContext from "../../contexts/SearchContext";
import css from "./css/movieSearch.module.css";
import axios from "axios";

export default function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const fetchMovies = () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
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
  const mapMovies = movies.map((movie, index) => {
    if (index < 5) {
      return (
        <div key={movie.id} className={css.MovieSearched}>
          <img 
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        className={css.MovieImage} />
          <p>{movie.title}</p>
        </div>
      );
    }
  });
  return (
    <>
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        <HomeHeader searchStatus={true} />
        <div className={css.HeaderContainer} />
        <div className={css.Container}>
          <h1>Resultados</h1>
          <div className={css.SearchRow}>{mapMovies}</div>
        </div>
        <HomeFooter />
      </SearchContext.Provider>
    </>
  );
}
