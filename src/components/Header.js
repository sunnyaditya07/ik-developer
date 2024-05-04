import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className=" display-flex align-items-center justify-content-space-between ik-header-logo-menu-container ">
        <div className="display-flex  align-items-center ik-header-logo-container">
          <img src={require("../assets/Vector.png")} alt="logo" />
          <p className="ik-header-logo-text">Ik developers</p>
        </div>
        <div className="ik-header-hamburger-cont">
          <i class="bi bi-list ik-header-hb-icon"></i>
        </div>
        <div className="ik-header-menu-box ">
          <div className="display-flex align-items-center ik-header-menu-container">
            <p>About us</p>
            <p>Services</p>
            <p>Case Studies</p>
            <p>Blog</p>
            <p>How it Works</p>
            <p>Hire</p>
          </div>
        </div>
        <div className="ik-header-contact-us-container ">
          <p className="ik-header-contact-us-text"> Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
