import "./css/profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/");
  }
  return (
    <div className="container">
      <h1 className="title">Quem está assistindo?</h1>
      <div className="perfilList">
        <div className="perfil" onClick={handleClick}>
          <img src="../../public/profileImage.jpg" /> <p>Perfil1</p>
        </div>
      </div>
      <button type="button" className="perfilButton">Gerenciar perfis</button>
    </div>
  );
}
