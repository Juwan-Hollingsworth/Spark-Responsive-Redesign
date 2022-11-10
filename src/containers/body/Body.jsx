import React from "react";
import "./body.css";
import col_photo from "../../assets/col_photo.jpeg";

function Body() {
  return (
    <div className="Body">
      <div className="home__2column">
        <div className="column">
          <div className="grad_background">
            <div className="col_content">
              <h1>Marketing Agency by Day, Creation Lab by night!</h1>
              <h2>
                Spark Social™ is a leading full-service digital agency in
                Atlanta, serving small to medium businesses.
              </h2>
              {/* button grid */}
              <button className="ghostBtn__hero">View Our Solutions</button>
              <br />
              <button className="ghostBtn__hero">Get Started</button>
            </div>
          </div>
          <br />
          {/* RHS Column */}
        </div>
        <div className="column">
          <img
            className="column_photo"
            src={col_photo}
            alt="working people"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Body;
