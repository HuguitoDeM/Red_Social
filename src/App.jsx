import "./App.css";
import { Login } from "./views/login";
import { useState } from "react";
import { Register } from "./views/register";

function App() {
  const [onflip, setOnFlip] = useState(true);
  const [animated, setAnimated] = useState("animated");
  const handleLogin = () => {
    handleAnimated();
    setOnFlip(!onflip);
  };
  const handleAnimated = () => setAnimated("");
  return (
    <>
      {onflip ? (
        <Login registro={handleLogin} animacion={animated} />
      ) : (
        <Register login={handleLogin} />
      )}
    </>
  );
}

export default App;
