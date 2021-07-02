import React from "react";
import "./Cart.styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { cartActions } from "../../Redux/Cart/cart-actions";
const Cart = ({ toggleDropDown }) => {
  return (
    <div className="cart-icon" onClick={toggleDropDown}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropDown: () => dispatch(cartActions()),
});

export default connect(null, mapDispatchToProps)(Cart);

// ! this can also be done
// export default connect(null, {
//   toggleDropDown: cartActions,
// })(Cart);
