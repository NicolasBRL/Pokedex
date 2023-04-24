import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navigation">
      <Logo />
      <ul>
          <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink></li>
          <li><NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>Mon blog</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
