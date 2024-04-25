import React from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  return (
    <div>
      <div className="ik-cs-main-container paddin-left paddin-right">
        <div className="display-flex align-items-center flex-deirection-column">
          <div className="ik-about-line"></div>
          <div className="display-flex align-items-center flex-deirection-column ik-cr-title-box">
            <p>Our recent</p>
            <p className="ik-cr-wroking-text">Case studies </p>
          </div>
        </div>
        <div className="ik-cs-boxes-container display-flex flex-deirection-column">
          <div className="ik-cs-container ik-cs-backgroun-one display-flex ">
            <div className="ik-cs-img-container display-flex align-items-center">
              <img src={require("../assets/mobile1.png")} alt="phone" />
            </div>
            <div className="ik-cs-description-box">
              <p className="ik-cs-description-title">
                Website Design for SCFC Canada
              </p>
              <p className="ik-cs-description-text">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="ik-cs-read-more-container display-flex">
                <p className="text-linear-color ik-cs-read-more-text">
                  Read More
                  <span className="ik-cs-chevron-icon">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="ik-cs-container ik-cs-backgroun-two display-flex ">
            <div className="ik-cs-img-container display-flex align-items-center">
              <img src={require("../assets/mobile2.png")} alt="phone" />
            </div>
            <div className="ik-cs-description-box">
              <p className="ik-cs-description-title">
                Website Design for SCFC Canada
              </p>
              <p className="ik-cs-description-text">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="ik-cs-read-more-container display-flex">
                <p className="text-linear-color ik-cs-read-more-text">
                  Read More
                  <span className="ik-cs-chevron-icon">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="ik-cs-container ik-cs-backgroun-three display-flex ">
            <div className="ik-cs-img-container display-flex align-items-center">
              <img src={require("../assets/mobile3.png")} alt="phone" />
            </div>
            <div className="ik-cs-description-box">
              <p className="ik-cs-description-title">
                Website Design for SCFC Canada
              </p>
              <p className="ik-cs-description-text">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="ik-cs-read-more-container display-flex">
                <p className="text-linear-color ik-cs-read-more-text">
                  Read More
                  <span className="ik-cs-chevron-icon">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ik-cs-read-cases-box display-flex">
          <p className="text-linear-color ik-cs-read-cases-text">
            Read more case studies{" "}
            <span className="ik-cs-chevron-icon">
              <i class="bi bi-chevron-right"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
