import React from "react";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ checkout: { imageUrl, price, quantity, name } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity"> {quantity}</span>
      <span className="price"> ${price}</span>
      <span className="remove-button">&#10006;</span>
    </div>
  );
};

export default CheckoutItem;
