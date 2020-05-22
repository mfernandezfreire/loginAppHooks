import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
