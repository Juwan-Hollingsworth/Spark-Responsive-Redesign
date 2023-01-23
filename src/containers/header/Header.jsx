import React from "react";
import "../header/header.css";
import spark_logo from "../../assets/spark_logo3.svg";
import Navbar from "../navbar/Navbar";
//On Scroll Header Logic

function Header() {
  return (
    <div className="header__main" id="header">
      <div className="logo__gr1">
        <img src={spark_logo} alt="logo" />
      </div>
      <div className="nav__gr2">
        <Navbar />
      </div>
      <div className="btn__gr3">
        <ul>
          <li>
            <button className="ghostBtn__header">Client Login</button>
          </li>
        </ul>
        <ul>
          <li>
            <button className="ghostBtn__header">Chat with an Expert</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
