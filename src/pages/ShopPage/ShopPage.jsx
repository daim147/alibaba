import React from "react";
import "./ShopPage.styles.scss";
import ShopPageOverview from "../../component/shopPageOverView/shopPageOverview";
import { Route } from "react-router";
import CollectionCategory from "../../component/CollectionCategory/CollectionCategory";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ShopPageOverview} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CollectionCategory}
      />
    </div>
  );
};

export default ShopPage;
