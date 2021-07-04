import React from "react";
import "./ShopPage.styles.scss";
import { connect } from "react-redux";
import { selectShopData } from "../../Redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/collectionPreview/CollectionPreview";

const ShopPage = ({ shopData }) => {
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});
export default connect(mapStateToProps)(ShopPage);
