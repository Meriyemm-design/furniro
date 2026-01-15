import React from "react";
import "@styles/home.scss";
import heroImage from "@assets/hero-img.webp";

const HeroPnel = () => {
  return (
    <>
      <div className="hero-panel">
        <div className="hero-image">
          <img src={heroImage} alt="hero" />
        </div>

        <div className="hero-content">
          <div className="new"> New Arrivals </div>
          <div className="hero-title">Discover Our New Collection </div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <button className="shop">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default HeroPnel;
