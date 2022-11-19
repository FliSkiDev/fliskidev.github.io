import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Main />
  </React.StrictMode>
);
