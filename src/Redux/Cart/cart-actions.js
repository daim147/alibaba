export const cartActions = () => ({ type: "TOOGLE_CART_DROPDOWN" });

export const addItem = (item) => ({
  type: "ADD_ITEM_TO_CART",
  payload: item,
});
