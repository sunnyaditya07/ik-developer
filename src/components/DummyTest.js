import React, { useState } from "react";
import "./DummyTest.css";
const DummyTest = () => {
  const [color, setColor] = useState(0);

  const nextColor = () => {
    setColor((prevColor) => (prevColor + 1) % 9);
  };

  const prevColor = () => {
    setColor((prevColor) => (prevColor === 0 ? 8 : prevColor - 1));
  };

  return (
    <div className="ik-dummy-test-container">
      <div className="ik-cs-arc-container-1 ">
        <div
          className={`arc arc1 ${color !== 5 ? "black-border" : "blue-border"}`}
        ></div>
        <div
          className={`arc arc2 ${color !== 4 ? "black-border" : "blue-border"}`}
        ></div>
      </div>

      <div className="ik-cs-arc-container-2 ">
        <div
          className={`arc arc3 ${color !== 6 ? "black-border" : "blue-border"}`}
        ></div>
        <div
          className={`arc arc4 ${color !== 3 ? "black-border" : "blue-border"}`}
        ></div>
      </div>
      <div className="blank-line-main-container">
        <div className="blank-line-container">
          {/* <div className="blank-line line-black-border"></div> */}
          <div
            className={`blank-line ${
              color !== 1 ? "line-black-border" : "line-blue-border"
            }`}
          ></div>
          <div
            className={`blank-line ${
              color !== 2 ? "line-black-border" : "line-blue-border"
            }`}
          ></div>
        </div>
        <div className="blank-line-container">
          <div
            className={`blank-line ${
              color !== 7 ? "line-black-border" : "line-blue-border"
            }`}
          ></div>
          <div
            className={`blank-line ${
              color !== 8 ? "line-black-border" : "line-blue-border"
            }`}
          ></div>
        </div>
      </div>
      <div className="ik-buton-box">
        <button onClick={prevColor}> Back</button>
        <button onClick={nextColor}>Next</button>
      </div>
    </div>
  );
};

export default DummyTest;
