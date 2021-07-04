import React from "react";
import "./CardDropDown.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItem } from "../../Redux/Cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { cartActions as toggleCart } from "../../Redux/Cart/cart-actions";

const CardDropDown = ({ cartStore, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartStore.length ? (
          cartStore.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCart());
          history.push("checkout");
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartStore: selectCartItem,
});
export default withRouter(connect(mapStateToProps)(CardDropDown));
