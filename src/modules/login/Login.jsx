import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import "./css/main.css";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";

export default function Login() {
  const status = useContext(LoginContext);
  return (
    <>
      <img src="../../../public/bg.jpg" className="BackgroundImage" />
      <main>
        <LoginHeader />
        <LoginForm status={status} />
        <LoginFooter />
      </main>
    </>
  );
}
