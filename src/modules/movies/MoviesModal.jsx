import css from "./css/movieModal.module.css";

export default function MoviesModal({ id }) {
  const movieId = id.movieId;
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
  ];
  const movie = movies[movieId];
  const handleExit = () => {
    id.closeModal();
  };
  return (
    <div className={css.outterContainer}>
      <div className={css.container}>
        <img src={movie.poster_path} className={css.img} />
        <button type="button" onClick={handleExit} className={css.exitButton}>
          X
        </button>
        <div className={css.divTitle}> 
          <h1>{movie.title}</h1>
          <button type="button" className={css.buttonWatch}>Assistir</button>
        </div>
        <div className={css.desc}>
          <p className={css.text} >Data de Lançamento: {movie.release_data}</p>
          <p className={css.text} >Gênero: {movie.gender}</p>
          <p className={css.text} >Descrição: <br /> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
