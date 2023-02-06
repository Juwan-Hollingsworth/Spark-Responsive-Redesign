import React from "react";
import "./cta.css";
import ctaImg from "../../assets/cta_img.png";

function CTA() {
  return (
    <div className="cta__main">
      <div class="row">
        <div class="column">
          <img src={ctaImg} className="cta__img" alt="" />
        </div>
        <div class="column">
          <h3>Digital Marketing Solutions</h3>
          <form>
            <label for="bname:">Business Name:</label>
            <input type="text" id="bname" name="bname"></input>
            <br />
            <label for="bemail:">Business Email:</label>
            <input type="text" id="bemail" name="bemail"></input>
            <br />
            <label for="bindustry:">Business Industry:</label>
            <input type="text" id="bindustry" name="bindustry"></input>
            <br />
            <label for="bphone:">Phone:</label>
            <input type="text" id="bphone" name="bphone"></input>
            <br />
            <label for="bmessage:">Message:</label>
            <input type="text" id="bmessage" name="bmessage"></input>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CTA;
