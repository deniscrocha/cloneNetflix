import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeHighlight from "./HomeHighlight";
import css from "./css/home.module.css";

export default function Home() {
  const movies = [
    {
      name: "Masha e O Urso",
      imgUrl: "../../../public/masha.jpg",
      gender: "action",
    },
    {
      name: "Masha e O Urso",
      imgUrl: "../../../public/masha.jpg",
      gender: "anime",
    },
  ];
  const moviesRow = movies.map((movie, index) => (
    <img src={movie.imgUrl} className={css.movieItem} key={index} />
  ));
  const actionMovies = movies.filter(movie => movie.gender == "action");
  const actionRow = actionMovies.map((movie, index) =>(
    <img src={movie.imgUrl} className={css.movieItem} key={index} /> 
  ));
  const adventureMovies = movies.filter(movie => movie.gender == "adventure");
  const adventureRow = adventureMovies.map((movie, index) =>(
    <img src={movie.imgUrl} className={css.movieItem} key={index} /> 
  ));
  const romanceMovies = movies.filter(movie => movie.gender == "romance");
  const romanceRow = romanceMovies.map((movie, index) =>(
    <img src={movie.imgUrl} className={css.movieItem} key={index} /> 
  ));
  const dramaMovies = movies.filter(movie => movie.gender == "drama");
  const dramaRow = dramaMovies.map((movie, index) =>(
    <img src={movie.imgUrl} className={css.movieItem} key={index} /> 
  ));
  const animeMovies = movies.filter(movie => movie.gender == "anime");
  const animeRow = animeMovies.map((movie, index) =>(
    <img src={movie.imgUrl} className={css.movieItem} key={index} /> 
  ));

  return (
    <>
      <HomeHeader />
      <HomeHighlight />
      <div className={css.container}>
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
