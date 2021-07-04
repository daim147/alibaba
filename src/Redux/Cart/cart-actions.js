export const cartActions = () => ({ type: "TOOGLE_CART_DROPDOWN" });

export const addItem = (item) => ({
  type: "ADD_ITEM_TO_CART",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const clearItem = (item) => ({
  type: "CLEAR_ITEM",
  payload: item,
});
