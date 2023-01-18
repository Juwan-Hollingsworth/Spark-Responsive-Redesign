import React from "react";
import "./blog.css";
import card1 from "../../assets/trends_img1.jpeg";
function Blog() {
  return (
    <div className="blog__main">
      <h2>Trends & Insights</h2>
      <div className="3col">
        <div class="row">
          <div class="column">
            <div class="card">
              <img className="card__img" src={card1} />
              <div class="card__container">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            {" "}
            <div class="card">
              <img className="card__img" src={card1} />
              <div class="card__container">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            {" "}
            <div class="card">
              <img className="card__img" src={card1} />
              <div class="card__container">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
