import React from "react";
import "./whyus.css";
import whyUsimg from "../../assets/whyUsimg.png";

function Whyus() {
  return (
    <div className="whyus__main">
      <div>
        <div class="row">
          <div class="column">
            A
            <img
              src={whyUsimg}
              className="whyUsimg"
              alt="person in excitement"
            />
          </div>
          <div class="column">B</div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
