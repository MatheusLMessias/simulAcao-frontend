import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginScreen from "./scenes/Login";
import HomeScreen from "./scenes/Home";
import MarketScreen from "./scenes/Market";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/Home" element={<HomeScreen />} />
        <Route path="/Market" element={<MarketScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
