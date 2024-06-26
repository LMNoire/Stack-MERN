import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="A waving hand for new arrivals" />
          </div>
          <p>collection</p>
          <p>for everybody</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="An arrow pointing to the right for latest collection" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="A women with sunglasses and bag wearing a blue tshirt, grey pants and Nike shoes" />
      </div>
    </div>
  );
};

export default Hero;
