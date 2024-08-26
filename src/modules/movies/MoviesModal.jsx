import css from "./css/movieModal.module.css";

export default function MoviesModal({ movieProps }) {
  const movie = movieProps.movieContent;
  const handleExit = () => {
    movieProps.closeModal();
  };
  return (
    <div className={css.outterContainer}>
      <div className={css.container}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          className={css.img}
        />
        <button type="button" onClick={handleExit} className={css.exitButton}>
          X
        </button>
        <div className={css.divTitle}>
          <h1>{movie.title}</h1>
          <button type="button" className={css.buttonWatch}>
            Assistir
          </button>
        </div>
        <div className={css.desc}>
          <p className={css.text}>Data de Lançamento: {movie.release_data}</p>
          <p className={css.text}>Gênero: {movie.gender}</p>
          <p className={css.text}>
            Descrição: <br /> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
