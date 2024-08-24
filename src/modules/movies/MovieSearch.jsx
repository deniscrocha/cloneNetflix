import { useState } from "react";
import HomeFooter from "../home/HomeFooter";
import HomeHeader from "../home/HomeHeader";
import SearchContext from "../../contexts/SearchContext";
import css from "./css/movieSearch.module.css";

export default function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const movies = [
    {
      id: 44362,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "action",
      overview: "descrição",
      release_data: "2024-05-31",
      vote_average: 9.2,
    },
    {
      id: 44363,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "anime",
      overview: "descrição",
      release_data: "2024-05-31",
      vote_average: 9.2,
    },
    {
      id: 44364,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "action",
      overview: "descrição",
      release_data: "2024-05-31",
      vote_average: 9.2,
    },
    {
      id: 44365,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "anime",
      overview: "descrição",
      release_data: "2024-05-31",
      vote_average: 9.2,
    },
    {
      id: 44366,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "action",
      overview: "descrição",
      release_data: "2024-05-31",
      vote_average: 9.2,
    },
    {
      id: 44367,
      title: "Masha e O Urso",
      poster_path: "../../../public/masha.jpg",
      gender: "anime",
      overview: "descrição",
      release_data: "2024-05-31",
      vote_average: 9.2,
    },
  ];
  const mapMovies = movies.map((movie, index) => {
    if (index < 5) {
      return (
        <div key={movie.id} className={css.MovieSearched}>
          <img src={movie.poster_path} className={css.MovieImage} />
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
