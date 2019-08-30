import React from "react";
import "./App.css";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <main>
      <Switch>
        <Route exact path ="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={CatForm} />
      </Switch>    
    </main>
    
  );
}

export default App;
