import React from "react";
import "./shopPageOverView.styles.scss";
import { connect } from "react-redux";
import { selectShopDataForPreview } from "../../Redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collectionPreview/CollectionPreview";

const shopPageOverview = ({ shopData }) => {
  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectShopDataForPreview,
});
export default connect(mapStateToProps)(shopPageOverview);
