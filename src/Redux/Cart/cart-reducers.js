const INITIAL_STATE = {
  hidden: true,
  cart: [],
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
      cart: [...state.cart, action.payload],
    };
  }

  return state;
};

export default cartReducer;
