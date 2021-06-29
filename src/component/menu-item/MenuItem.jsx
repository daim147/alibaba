import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router";
const MenuItem = ({ imageUrl, title, size, history, linkUrl }) => {
  return (
    <div className={`menu-item ${size} `} onClick={() => history.push(linkUrl)}>
      <div
        className="backGround"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">Shop Now</p>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
