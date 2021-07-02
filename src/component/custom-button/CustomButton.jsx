import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, invert, ...otherprops }) => {
  // console.log(children);
  return (
    <button
      className={`custom-button ${invert ? "invert" : ""}`}
      {...otherprops}
    >
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
