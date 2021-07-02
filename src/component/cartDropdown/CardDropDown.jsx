import React from "react";
import "./CardDropDown.styles.scss";
import CustomButton from "../custom-button/CustomButton";

const CardDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CardDropDown;
