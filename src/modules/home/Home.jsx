import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeHighlight from "./HomeHighlight";
import css from "./css/home.module.css";

export default function Home(){
  return(
    <>
      <HomeHeader />
      <HomeHighlight />
      <div className={css.container}>
        <h1>Image Destaque Series</h1>
        <div className={css.lists}>
          <h3>Novidades na Netflix</h3>
          <div>
            <div className={css.leftArrowContainer}>
              <img src="../../../public/arrow.png" className={css.leftArrow}/>
            </div>
            <div className={css.rightArrowContainer}>
              <img src="../../../public/arrow.png" className={css.rightArrow}/>
            </div>
          </div>
        </div>
        <div className={css.lists}>
          <h3>Ação</h3>
          <div>
            <div className={css.leftArrowContainer}>
              <img src="../../../public/arrow.png" className={css.leftArrow}/>
            </div>
            <div className={css.rightArrowContainer}>
              <img src="../../../public/arrow.png" className={css.rightArrow}/>
            </div>
          </div>
        </div>
        <div className={css.lists}>
          <h3>Aventura</h3>
          <div>
            <div className={css.leftArrowContainer}>
              <img src="../../../public/arrow.png" className={css.leftArrow}/>
            </div>
            <div className={css.rightArrowContainer}>
              <img src="../../../public/arrow.png" className={css.rightArrow}/>
            </div>
          </div>
        </div>
        <div className={css.lists}>
          <h3>Romance</h3>
          <div>
            <div className={css.leftArrowContainer}>
              <img src="../../../public/arrow.png" className={css.leftArrow}/>
            </div>
            <div className={css.rightArrowContainer}>
              <img src="../../../public/arrow.png" className={css.rightArrow}/>
            </div>
          </div>
        </div>
        <div className={css.lists}>
          <h3>Drama</h3>
          <div>
            <div className={css.leftArrowContainer}>
              <img src="../../../public/arrow.png" className={css.leftArrow}/>
            </div>
            <div className={css.rightArrowContainer}>
              <img src="../../../public/arrow.png" className={css.rightArrow}/>
            </div>
          </div>
        </div>
        <div className={css.lists}>
          <h3>Anime</h3>
          <div>
            <div className={css.leftArrowContainer}>
              <img src="../../../public/arrow.png" className={css.leftArrow}/>
            </div>
            <div className={css.rightArrowContainer}>
              <img src="../../../public/arrow.png" className={css.rightArrow}/>
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  )
}
