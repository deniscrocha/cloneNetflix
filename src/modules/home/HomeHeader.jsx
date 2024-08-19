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
      <img src="../../../public/netflixHeader.svg" className="netflixLogo" />
      <ul className="pages">
        <li>Início</li>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Minha Lista</li>
      </ul>
      <img className="search" />
      <img className="notification" />
      <img src="../../../public/profileImage.jpg" className="profile" />
      <img className="profileArrow" />
    </div>
  );
}
