import React from "react";
import "./collection-item.styles.scss";
import Tilt from "react-parallax-tilt";

export const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    // <Tilt>
    <Tilt
      gyroscope={true}
      perspective={900}
      glareEnable={true}
      glareMaxOpacity={0.45}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="collection-item"
    >
      <div className="image">
        <img src={`${imageUrl}`} alt="" />
      </div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </Tilt>
    // </Tilt>
  );
};
