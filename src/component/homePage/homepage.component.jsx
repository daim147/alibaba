import React from "react";
import "./homepage.styles.scss";
import { Data as section } from "./homePageData";
const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      {section.map((sec) => (
        <div
          style={{
            backgroundImage: `url(${sec.imageUrl})`,
          }}
          className="menu-item"
          key={sec.id}
        >
          <div className="content">
            <h1 className="title">{sec.title}</h1>
            <p className="subtitle">Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Homepage;
