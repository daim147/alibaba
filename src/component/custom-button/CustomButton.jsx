import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, ...otherprops }) => {
  console.log(children);
  return (
    <button className="custom-button" {...otherprops}>
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
