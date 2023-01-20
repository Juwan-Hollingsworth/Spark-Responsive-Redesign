import React from "react";
import "./aiobanner.css";

function AIObanner() {
  return (
    <div className="AIO__main">
      AIObanner{" "}
      <div class="row">
        <div class="column">
          The all-in-one marketing solution for your small business 🎉
        </div>
        <div class="column">
          <div className="right__col">
            We'll help your local business achieve more, digitally! Leave the
            heavy lifting to us so you can actually focus on running your
            business.
            <br />
            <div className="btn__container">
              <button>Write us</button> or <button>Give us a Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIObanner;
