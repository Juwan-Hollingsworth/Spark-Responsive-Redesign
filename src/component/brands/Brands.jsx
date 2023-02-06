import React from "react";
import "./brands.css";
import amzn from "../../assets/amzn.png";
import ah from "../../assets/ah.png";
import hs from "../../assets/hs.png";
import fb from "../../assets/fb.png";
import gd from "../../assets/gd.png";
import ms from "../../assets/ms.png";

function Brands() {
  return (
    <div>
      <h2 className="brandTitle">Brands We Work With:</h2>
      <div className="grid__container">
        <div className="grid">
          <img src={amzn} alt="" />
          <img src={ah} alt="" />
          <img src={hs} alt="" />
          <img src={fb} alt="" />
          <img src={gd} alt="" />
          <img src={ms} alt="" />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Brands;
