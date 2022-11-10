import React from "react";
import "../header/header.css";
import spark_logo from "../../assets/spark_logo3.svg";
import Navbar from "../navbar/Navbar";
//On Scroll Header Logic

function Header() {
  return (
    <div className="header" id="header">
      <img className="logo" src={spark_logo} alt="logo" />
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
      <Navbar />
    </div>
  );
}

export default Header;
