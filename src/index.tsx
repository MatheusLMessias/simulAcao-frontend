import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginScreen from "./scenes/Login";
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          {/* <Route element={<Layout />}> */}
            <Route path="/" element={<LoginScreen />} />
          {/* </Route> */}
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);