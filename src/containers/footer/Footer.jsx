import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__main">
      <div class="footer__row">
        <div class="column__A">
          <h3>CONTACT US</h3>
          Phone: (404) 850-4102 <br /> Email: hello@sparksocial.agency <br />
          Address: <br /> 8 Park Street, New York <br /> 101 Marietta St NW,
          Atlanta
        </div>
        <div class="column__B">
          <h3>USEFUL LINKS</h3>
        </div>
        <div class="column__C">
          <h3>FOLLOW US</h3>
        </div>
        <div class="column__D">
          <h3>STAY INFORMED</h3>
          Get industry standard trends and insights <br /> delivered straight to
          your business's email
          <div className="footer__form">
            <form action="action_page.php">
              <br />
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your business email "
              />
              <br /> <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
