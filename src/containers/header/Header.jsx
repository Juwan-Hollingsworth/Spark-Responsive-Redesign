import React from "react";
import "../header/header.css";
import spark_logo from "../../assets/spark_logo3.svg";

//On Scroll Header Logic
window.onscroll = function () {
  myFunction();
};
let header = document.getElementById("header");
let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else header.classList.remove("sticky");
}

function Header() {
  return (
    <div className="header" id="header">
      <img className="logo" src={spark_logo} alt="logo" />
      <h2>Header</h2>
    </div>
  );
}

export default Header;
