import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

export const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};
