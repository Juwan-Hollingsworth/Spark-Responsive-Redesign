import React from "react";
import "./banner.css";
import col_photo from "../../assets/col_photo.jpeg";

function Banner() {
  return (
    // <div className="Banner__main">
    //   <div className="lhs__column">
    //     <div className="gradient_bg">
    //       {/* LHS Column */}
    //       <div className="lhs_content">
    //         <h1>Marketing Agency by Day, Creation Lab by night!</h1>
    //         <h2>
    //           Spark Social™ is a leading full-service digital agency in Atlanta,
    //           serving small to medium businesses.
    //         </h2>
    //         {/* button grid */}
    //         <button className="lhs__ghostBtn">View Our Solutions</button>
    //         <br />
    //         <button className="lhs__ghostBtn">Get Started</button>
    //       </div>
    //     </div>
    //     <br />
    //   </div>
    //   {/* RHS Column */}
    //   <div className="rhs__column">
    //     <img className="rhs__img" src={col_photo} alt="working people"></img>
    //   </div>
    // </div>

    <div class="banner row">
      <div class="banner__column left">
        {/* LHS Column */}
        <div className="lhs__content">
          <h1>Marketing Agency by Day, Creation Lab by night!</h1>
          <h2>
            Spark Social™ is a leading full-service digital agency in Atlanta,
            serving small to medium businesses.
          </h2>
        </div>
        <div className="btns">
          {/* button grid */}
          <button className="lhs__ghostBtn">View Our Solutions</button>
          <button className="lhs__ghostBtn">Get Started</button>
        </div>
      </div>
      {/* RHS Column */}
      <div class="banner__column right">
        <div className="rhs__column">
          <img className="rhs__img" src={col_photo} alt="working people"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
