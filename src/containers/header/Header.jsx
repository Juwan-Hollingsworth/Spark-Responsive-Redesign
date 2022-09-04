import React from "react";
import "../header/header.css";
import spark_logo from "../../assets/spark_logo3.svg";

//On Scroll Header Logic

function Header() {
  return (
    <div className="header" id="header">
      <img className="logo" src={spark_logo} alt="logo" />
      <h2>Header</h2>
    </div>
  );
}

export default Header;
