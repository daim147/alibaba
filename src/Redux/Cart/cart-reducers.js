import { addItem } from "./cart-utils";
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

  return state;
};

export default cartReducer;
