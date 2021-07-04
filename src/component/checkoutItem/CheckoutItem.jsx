import React from "react";
import { clearItem, removeItem, addItem } from "../../Redux/Cart/cart-actions";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";

const CheckoutItem = ({ checkout, dispatch }) => {
  const { imageUrl, price, quantity, name } = checkout;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(checkout))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(checkout))}>
          &#10095;
        </div>
      </span>
      <span className="price"> ${price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItem(checkout))}
      >
        &#10006;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
