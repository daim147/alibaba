import { addItem, removeItem } from "./cart-utils";
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "TOOGLE_CART_DROPDOWN") {
    return {
      ...state,
      hidden: !state.hidden,
    };
  }

  if (action.type === "ADD_ITEM_TO_CART") {
    return {
      ...state,
      cartItem: addItem(state.cartItem, action.payload),
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItem: removeItem(state.cartItem, action.payload),
    };
  }

  if (action.type === "CLEAR_ITEM") {
    return {
      ...state,
      cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
    };
  }

  return state;
};

export default cartReducer;
