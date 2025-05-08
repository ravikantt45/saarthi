import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app">
      {isLogin ? (
        <Login switchPage={() => setIsLogin(false)} />
      ) : (
        <Signup switchPage={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;