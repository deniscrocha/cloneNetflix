import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./modules/login/Login";
import { useState } from "react";
import LoginContext from "./contexts/LoginContext";
import Home from "./modules/home/Home";
import Profile from "./modules/profile/Profile";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Router>
          <Routes>
            <Route path="/" Component={loginStatus ? Home : Login} />
            <Route path="/Login" Component={Login} />
            <Route path="/Profile" Component={loginStatus ? Profile : Login} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;
