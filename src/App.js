import React from "react";
import { Welcome, Repos } from "./pages";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Switch>
    
    <Route path = '/' exact>
      <Sidebar/>
      <Welcome/>
    </Route>
    <Route path = '/repos' exact>
      <Repos/>
    </Route>

      
    </Switch>
  );
}

export default App;
