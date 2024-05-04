import React from "react";
import "./Information.css";
const Information = () => {
  return (
    <div>
      <div className="paddin-left paddin-right ik-about-main-container">
        <div class="ik-half-circle ik-about-half-circle"></div>
        <div className="display-flex justify-content-space-between ik-about-container  ">
          <div className="ik-about-text-container display-flex align-items-center  flex-deirection-column">
            <div className="ik-about-line"></div>
            <div>
              <p className="ik-about-leading-text">
                Leading companies trust us
              </p>
              <p className="ik-about-develop-text">to develop software</p>
              <p className="ik-about-description-text">
                We{" "}
                <span className="text-linear-color ">
                  add development capacity
                </span>{" "}
                to tech teams. Our value isn’t limited to building teams but is
                equally distributed across the project lifecycle. We are a
                custom software development company that guarantees the
                successful delivery of your project.
              </p>
              <p className="ik-about-see-more-text">
                See more Informations<span>&rarr;</span>
              </p>
            </div>
          </div>
          <div className="ik-about-img-container display-flex align-items-center ">
            <img
              src={require("../assets/about.png")}
              alt="about"
              className="ik-about-img"
            />
          </div>
        </div>
        <div className="display-flex flex-deirection-column align-items-center ik-about-work-cont">
          <div className="ik-about-line"></div>
          <div className="ik-about-meet-text-box">
            <p className="ik-about-meet-text">Meet the People</p>
            <p className="ik-about-working-text">We are Working With</p>
          </div>
        </div>
        <div className="ik-about-navigation-main-container">
          <div className="ik-about-navigation-container display-flex align-items-center">
            <div className="ik-about-navigation-box display-flex  align-items-center justify-content-center ">
              <span>
                <i class="bi bi-arrow-left"></i>
              </span>
            </div>
            <div className="ik-about-navigation-box  display-flex  align-items-center justify-content-center ik-">
              <span className="ik-about-filled-arrow">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="ik-half-circle ik-about-half-circle-position"></div>
      </div>
    </div>
  );
};

export default Information;
