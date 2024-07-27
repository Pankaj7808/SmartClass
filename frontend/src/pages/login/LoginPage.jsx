import React,{useState} from "react";
import Login from "../../components/login/Login";
import Register from "../../components/login/Register";

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? (
    <Login showLogin={showLogin} setShowLogin={setShowLogin} />
  ) : (
    <Register showLogin={showLogin} setShowLogin={setShowLogin} />
  );
 
}

export default LoginPage;
