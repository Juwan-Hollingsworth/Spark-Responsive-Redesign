import React from "react";
import "./services.css";
import seo_icon from "../../assets/seo_card.svg";
function Services() {
  return (
    <div className="services__main">
      <div>
        {/* title text  */}
        <h4 className="servicesTitle">Award Winning Performance</h4>
        <h2 className="servicesTitle">Our Services:</h2>

        {/* column cards */}
        <div class="card__row">
          <div className="card__column one">
            <div className="card">
              <img src={seo_icon} alt="seo icon" height="100" width="100" />
              <h3> Search Engine Optimization</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="card__column two">
            <div className="card">
              <img src={seo_icon} alt="seo icon" height="100" width="100" />
              <h3> Website Development</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="card__column three">
            <div className="card">
              <img src={seo_icon} alt="seo icon" height="100" width="100" />
              <h3> Social Media Marketing</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            {/* Services Button */}
            <button className="services__button">View Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
