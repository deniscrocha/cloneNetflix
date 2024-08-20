import css from "./css/homeFooter.module.css";

export default function HomeFooter(){
  return(
    <footer className={css.container}>
      <div>
        <ul>
          <li><img src="../../../public/facebook.png" className={css.icon}/></li>
          <li><img src="../../../public/instagram.png" className={css.icon}/></li>
          <li><img src="../../../public/twitter.png" className={css.icon}/></li>
          <li><img src="../../../public/youtube.png" className={css.icon}/></li>
        </ul>
        <p>Audiodescrição</p>
        <p>Relações com investidores</p>
        <p>Avisos legais</p>
        <button>Código do serviço</button>
      </div>
      <div>
        <p>Central de Ajuda</p>
        <p>Carreiras</p>
        <p>Preferências de cookies</p>
      </div>
      <div>
        <p>Cartão pré-pago</p>
        <p>Termos de Uso</p>
        <p>Informações corporativas</p>
      </div>
      <div>
        <p>Impresa</p>
        <p>Privacidade</p>
        <p>Entre em contato</p>
      </div>
    </footer>
  )
}
