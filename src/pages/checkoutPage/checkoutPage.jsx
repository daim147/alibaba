import React from "react";
import "./checkoutPage.styles.scss";
import {
  selectTotalAmount,
  selectCartItem,
} from "../../Redux/Cart/cart-selector";
import CheckoutItem from "../../component/checkoutItem/CheckoutItem";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import StripeComponent from "../../component/stripe/stripeComponent";

const checkoutPage = ({ totalAmount, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkout={item} />
      ))}
      <div className="total">
        <span>${totalAmount}</span>
      </div>
      <div className="card-message">
        *Please Use following Test credit card for payments* <br />
        4242 4242 4242 4242 - Exp: any future date - CVV: any 3 digits
      </div>
      <StripeComponent price={totalAmount} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  totalAmount: selectTotalAmount,
});

export default connect(mapStateToProps)(checkoutPage);
