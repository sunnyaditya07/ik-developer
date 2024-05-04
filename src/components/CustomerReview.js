import React from "react";
import "./CustomerReview.css";
const CustomerReview = () => {
  return (
    <div>
      <div className="ik-cr-main-container">
        <div className="display-flex align-items-center flex-deirection-column ik-cr-container ">
          <div className="display-flex align-items-center flex-deirection-column">
            <div className="ik-about-line ik-cr-line"></div>
            <div className="display-flex align-items-center flex-deirection-column ik-cr-title-box">
              <p>Why cutomers love</p>
              <p className="ik-cr-wroking-text">working with us</p>
            </div>
          </div>
          <div className="ik-cr-description-container position-relative">
            <img
              src={require("../assets/colon1.png")}
              alt="colon"
              className="ik-cr-colon-one position-absolute "
            />
            <p className="ik-cr-description-text">
              Without any doubt I recommend Alcaline Solutions as one of the
              best web design and digital marketing agencies. One of the best
              agencies I’ve came across so far. Wouldn’t be hesitated to
              introduce their work to someone else.
            </p>
            <img
              src={require("../assets/colon2.png")}
              alt="colon"
              className="ik-cr-colon-two position-absolute "
            />
          </div>
          <div className="ik-cr-customer-img-container display-flex align-items-center">
            <img
              src={require("../assets/r1.png")}
              alt="customer"
              className="review-img"
            />
            <img
              src={require("../assets/r2.png")}
              alt="customer"
              className="review-img"
            />
            <img
              src={require("../assets/r3.png")}
              alt="customer"
              className="review-img"
            />
            <img
              src={require("../assets/r4.png")}
              alt="customer"
              className="review-img"
            />
            <img
              src={require("../assets/r5.png")}
              alt="customer"
              className="review-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
