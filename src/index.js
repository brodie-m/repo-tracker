//react

import React from "react";
import ReactDOM from "react-dom";

//redux

import { Provider } from "react-redux";
import store from "./store";

//routing
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

