import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./css/homeHeader.module.css";
import SearchContext from "../../contexts/SearchContext";

export default function HomeHeader({ searchStatus }) {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [searchText, setSearchText] = useState("");
  const search = useContext(SearchContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBackgroundColor("black");
      } else {
        setBackgroundColor("transparent");
      }
    });
  }, []);
  useEffect(()=>{
    search.setSearchText(searchText);
  }, [searchText])
  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickSearch = () => {
    navigate("/Search");
  };
  return (
    <div id="header" className={css.container} style={{ backgroundColor }}>
      <div>
        <img src="../../../public/netflixHeader.svg" className="netflixLogo" />
        <ul className="pages">
          <li onClick={handleClickHome}>Início</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Minha Lista</li>
        </ul>
      </div>
      <div>
        {searchStatus ? (
          <label className={css.searchContainer}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img src="../../../public/search.png" className={css.icon} />
          </label>
        ) : (
          <img
            onClick={handleClickSearch}
            src="../../../public/search.png"
            className={css.icon}
          />
        )}
        <img src="../../../public/notification.png" className={css.icon} />
        <img src="../../../public/profileImage.jpg" className="profile" />
        <img src="../../../public/caret.png" className={css.caret} />
      </div>
    </div>
  );
}
