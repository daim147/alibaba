import React from "react";
import "./CardDropDown.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItem } from "../../Redux/Cart/cart-selector";
import { createStructuredSelector } from "reselect";

const CardDropDown = ({ cartStore }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartStore.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartStore: selectCartItem,
});
export default connect(mapStateToProps)(CardDropDown);
