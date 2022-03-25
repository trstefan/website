import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <Link to="/"> 01 home </Link>
        </li>
        <li>
          <Link to="/about"> 02 about</Link>
        </li>
        <li>
          <Link to="/projects">03 projects </Link>
        </li>
        <li>
          <Link to="/contact">04 contact </Link>
        </li>
      </ul>
    </nav>
  );
};
