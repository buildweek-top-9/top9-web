import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";



function App() {
  return (
    <main>
      <NavBar />
      <Register />
      <Login />
    </main>
  );
}

export default App;
