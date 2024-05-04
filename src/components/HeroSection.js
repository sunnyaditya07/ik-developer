import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="ik-hero-section-main-container">
      <div className="display-flex align-items-center ik-hero-section-container paddin-left  paddin-right ">
        <div className="ik-hero-section-title-container">
          <div className="ik-hero-title-box">
            <p className="ik-hero-title-one">
              Great{" "}
              <span className="ik-hero-product-span text-linear-color ">
                Product
              </span>{" "}
              is
            </p>
            <p className="ik-hero-title-two">
              build by great <span className=" text-linear-color ">teams</span>
            </p>
          </div>
          <div>
            <p className="ik-hero-section-subtiext">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
          </div>
          <div className="ik-hero-lets-btn-cont display-flex align-items-center justify-content-center ">
            <p className="ik-hero-section-btn">Let’s get started!</p>
          </div>
        </div>
        <div className="ik-hero-section-img-container">
          <img src={require("../assets/hero.png")} alt="logo" />
        </div>
      </div>
      <div class="ik-half-circle ik-hero-half-circle-position"></div>
    </div>
  );
};

export default HeroSection;
