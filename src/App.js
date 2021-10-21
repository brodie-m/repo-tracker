import React from "react";
import { Welcome, Repos, About, Contact, NotFound } from "./pages";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Switch>
    
    <Route path = '/' exact>
      
      <Welcome/>
    </Route>
    <Route path = '/repos' exact>
      <Repos/>
    </Route>
    <Route path = '/about' exact>
      <About/>
    </Route>
    <Route path = '/contact' exact>
      <Contact/>
    </Route>
    <Route path = '*' exact>
      <NotFound/>
    </Route>

      
    </Switch>
  );
}

export default App;
