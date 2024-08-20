import css from "./css/homeHighlight.module.css";

export default function HomeHighlight() {
  return (
    <>
      <img
        className={css.imageBackground}
        src="../../../public/masha.jpg"
        alt="fundo serie"
      />
      <div className={css.container}>
        <img src="../../../public/mashaLogo.png" alt="logo da serie" />
        <p>
          A série é baseada em um conta de fadas do folclore russo e mostra o
          cotidiano de uma pequena menina travessa de três anos chamada{" "}
          <strong>Masha</strong> (apelido para Maria, em russo), que vive em uma
          casa em meio a uma floresta
        </p>
        <div>
          <button type="button" className={css.buttonWatch}>
            <img src="../../../public/playButton.png" className={css.icon} />{" "}
            Assistir
          </button>
          <button type="button" className={css.buttonMoreInfo}>
            <img src="../../../public/info.png" className={css.iconInfo} />{" "}
            Mais Informações
          </button>
        </div>
      </div>
    </>
  );
}
