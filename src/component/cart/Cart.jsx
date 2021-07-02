import React from "react";
import "./Cart.styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { cartActions } from "../../Redux/Cart/cart-actions";
import {
  selectItemCount,
  selectDropDown,
} from "../../Redux/Cart/cart-selector";
import { createStructuredSelector } from "reselect";

const Cart = ({ toggleDropDown, active, itemCount }) => {
  return (
    <div className={`cart-icon`} onClick={toggleDropDown}>
      <ShoppingCart className={`shopping-icon ${active ? "" : "active"} `} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropDown: () => dispatch(cartActions()),
});

// const mapStateToProps = (state) => {
//   return {
//     active: selectDropDown(state),
//     itemCount: selectItemCount(state),
//   };
// };
const mapStateToProps = createStructuredSelector({
  active: selectDropDown,
  itemCount: selectItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// ! this can also be done
// export default connect(null, {
//   toggleDropDown: cartActions,
// })(Cart);
