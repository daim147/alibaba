import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import Cart from "../cart/Cart";
import CardDropDown from "../cartDropdown/CardDropDown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
        {currentUser ? <span>{currentUser.displayName}</span> : null}
      </Link>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
      {hidden ? null : <CardDropDown />}
    </div>
  );
};
// const mapStatetoProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden : state.cart.hidden
// });
const mapStatetoProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStatetoProps)(Header);
