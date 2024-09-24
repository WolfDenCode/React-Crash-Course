import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">To-Do App</h2>
      <ul className="nav-links">
        <li>
          <Link to="" className="nav-item" activeclassname="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="dashboard" className="nav-item" activeclassname="active">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
