import React from "react";
import "./App.css";
import { Welcome, Repos } from "./pages";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      
    <Route path = '/' exact>
      <Welcome/>
    </Route>
    <Route path = '/repos' exact>
      <Repos/>
    </Route>

      
    </Switch>
  );
}

export default App;
