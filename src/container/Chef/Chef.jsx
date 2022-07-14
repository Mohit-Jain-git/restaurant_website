import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"></img>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"></img>
          <p className="p__opensans">
            Lorem, ipsum dolor expedita raise rhyne consectetur adipisicing
            elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id hic
          maxime laborum cupiditate necessitatibus neque, debitis rerum vel qui
          animi expedita sapiente nam velit eos. Incidunt magni blanditiis qui
          ipsum itaque, nesciunt possimus eveniet?
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign"></img>
      </div>
    </div>
  </div>
);

export default Chef;
