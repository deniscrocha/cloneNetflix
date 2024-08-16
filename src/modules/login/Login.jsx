import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import "./css/main.css"
export default function Login(){
  return(
    <>
      <img src="../../../public/bg.jpg" className="BackgroundImage"/>
      <main>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </main>
    </>
  )
}
