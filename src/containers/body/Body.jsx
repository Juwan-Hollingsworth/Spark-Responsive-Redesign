import React from "react";
import "./body.css";
import Divider from "../../component/section_divider/Divider";
import Brands from "../../component/brands/Brands";
import {
  AIObanner,
  Blog,
  CTA,
  Services,
  Testimonial,
  Whyus,
} from "../../component";

function Body() {
  return (
    <div className="body__main">
      <div>
        <Brands />
        <Divider />
        <Services />
        <Testimonial />
        <CTA />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Whyus />
      </div>
      <div>
        <AIObanner />
      </div>
    </div>
  );
}

export default Body;
