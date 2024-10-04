import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
export default App;
