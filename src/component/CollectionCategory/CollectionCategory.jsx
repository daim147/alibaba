import React from "react";
import "./CollectionCategory.styles.scss";
import { connect } from "react-redux";
import { selectCategory } from "../../Redux/shop/shopSelector";
import CollectionItem from "../collectionItem/CollectionItem";

const CollectionCategory = ({ category, match }) => {
  console.log(match.params.categoryId);
  if (match.params.categoryId === "/checkout") {
    console.log("hy");
  }
  const { title, items } = category;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CollectionCategory);
