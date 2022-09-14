import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navbar__container">
      <div>
        <ul>
          <li>
            <a href="home">Home </a>
          </li>

          <li>
            <a href="home"> Services </a>
          </li>

          <li>
            <a href="home"> Case Studies </a>
          </li>
          <li>
            <a href="home"> Trends & Insights </a>
          </li>
        </ul>
      </div>
      <div>Hamburger Menu</div>
    </div>
  );
}

export default Navbar;
