import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <NavLink className="logo" to="/">
          Book Finder
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
