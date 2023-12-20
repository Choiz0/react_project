import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <NavLink className="logo" to="/">
        <h1>Book Finder</h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
