import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For Your</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img
          src={exclusive_image}
          alt="A women with sunglasses wearing a black shirt with a skeleton hand and a blue jean"
        />
      </div>
    </div>
  );
};

export default Offers;
