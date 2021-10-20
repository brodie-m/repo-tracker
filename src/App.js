import React from "react";
import "./App.css";
import { Welcome, Repos } from "./pages";
import { Route, Switch } from "react-router-dom";
import CustomNav from "./components/CustomNav";
function App() {
  return (
    <Switch>
    <CustomNav/>
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
