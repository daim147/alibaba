import React from "react";
import "./collection-item.styles.scss";
import Tilt from "react-parallax-tilt";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/cart-actions";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <Tilt
      gyroscope={true}
      perspective={900}
      tiltMaxAngleX={5}
      tiltMaxAngleY={2}
      className="collection-item"
    >
      <div className="image">
        <img src={`${imageUrl}`} alt="" />
      </div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} invert>
        Add to Cart
      </CustomButton>
    </Tilt>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
