import { useEffect, useState } from "react";
import css from "./css/homeHeader.module.css";

export default function HomeHeader() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBackgroundColor("black");
      } else {
        setBackgroundColor("transparent");
      }
    });
  }, []);
  return (
    <div id="header" className={css.container} style={{backgroundColor}}>
      <div>
      <img src="../../../public/netflixHeader.svg" className="netflixLogo" />
      <ul className="pages">
        <li>Início</li>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Minha Lista</li>
      </ul>
      </div>
      <div>
        <img src="../../../public/search.png" className={css.icon} />
        <img src="../../../public/notification.png" className={css.icon} />
        <img src="../../../public/profileImage.jpg" className="profile" />
        <img src="../../../public/caret.png" className={css.caret} />
      </div>
    </div>
  );
}
