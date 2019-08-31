import React from "react";
import "./App.css";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import DTop9Add from "./components/DTop9Add.js"




function App() {
  return (
    <main>
      <Switch>
        <Route exact path ="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/addpost" component={DTop9Add} />
      </Switch>
    </main>
    
  );
}

export default App;
