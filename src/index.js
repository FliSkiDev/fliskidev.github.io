import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>
);
