import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectShopDataForPreview = createSelector(
  [selectShopData],
  (allData) => Object.values(allData)
);

export const selectCategory = (category) =>
  createSelector([selectShopData], (alldata) => alldata[category]);
