import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectCategory = (category) =>
  createSelector([selectShopData], (alldata) =>
    alldata.find((data) => data.routeName === category)
  );
