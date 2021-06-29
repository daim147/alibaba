import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/signIn">
          Contact
        </Link>
      </div>
    </div>
  );
};
