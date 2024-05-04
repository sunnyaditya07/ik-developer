import React from "react";
import "./Brand.css";
const Brand = () => {
  return (
    <div>
      <div className="ik-brand-logo-container display-flex  align-items-center justify-content-space-between paddin-left paddin-right">
        <img
          src={require("../assets/logo5.png")}
          alt="logo"
          className="brand-logo"
        />
        <img
          src={require("../assets/logo6.png")}
          alt="logo"
          className="brand-logo"
        />
        <img
          src={require("../assets/logo7.png")}
          alt="logo"
          className="brand-logo"
        />
        <img
          src={require("../assets/logo8.png")}
          alt="logo"
          className="brand-logo"
        />
        <img
          src={require("../assets/logo9.png")}
          alt="logo"
          className="brand-logo"
        />
      </div>
    </div>
  );
};

export default Brand;
