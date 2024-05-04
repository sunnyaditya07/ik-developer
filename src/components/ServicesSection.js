import React from "react";
import "./ServicesSection.css";
const ServicesSection = () => {
  return (
    <div className="ik-services-main-container">
      <div className="ik-services-box-container">
        <div className="display-flex align-items-center justify-content-center">
          <p className="ik-services-text">Services we offer</p>
        </div>
        <div className="paddin-left  paddin-right ">
          <div className="display-flex align-items-center justify-content-space-between ik-services-main-cont">
            <div className="ik-services-section-box display-flex align-items-center justify-content-center">
              <div className="display-flex align-items-center justify-content-center ik-services-icon-container">
                <img src={require("../assets/code.png")} alt="logo" />
              </div>
              <p className="ik-services-center-text text-linear-color">
                Web Design & Development
              </p>
              <p className="ik-services-end-text">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
            <div className="ik-services-section-box ik-services-middle-box display-flex align-items-center justify-content-center">
              <div className="display-flex align-items-center justify-content-center ik-services-icon-container">
                <img src={require("../assets/code.png")} alt="logo" />
              </div>
              <p className="ik-services-center-text text-linear-color">
                Web Design & Development
              </p>
              <p className="ik-services-end-text">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>{" "}
            <div className="ik-services-section-box display-flex align-items-center justify-content-center">
              <div className="display-flex align-items-center justify-content-center ik-services-icon-container">
                <img src={require("../assets/code.png")} alt="logo" />
              </div>
              <p className="ik-services-center-text text-linear-color">
                Web Design & Development
              </p>
              <p className="ik-services-end-text">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </div>
        </div>
        <div className="display-flex  align-items-center justify-content-center ik-service-section-carousel-main-container">
          <div className="ik-services-empty-box"></div>
          <div className="ik-services-carousel-container display-flex  align-items-center justify-content-center">
            <div className="ik-services-carousel-btn"></div>
            <div className="ik-services-carousel-btn"></div>
            <div className="ik-services-carousel-btn ik-services-active-carousel"></div>
            <div className="ik-services-carousel-btn"></div>
            <div className="ik-services-carousel-btn"></div>
          </div>
          <div className="ik-services-carousel-cont">
            <div className="display-flex  align-items-center ik-services-carousel-number-container ">
              <p>01</p>
              <div className="ik-services-carousel-indicator">
                <div className="ik-services-carousel-filled"></div>
              </div>
              <p>05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
