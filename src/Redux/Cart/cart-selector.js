import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

// !when the output of any function will change and it is used in any CREATESELECTOR FUNCTION than it will exeute
// !When the output(return) of state.cart will change than function using it will execute

export const selectCartItem = createSelector([selectCart], (cart) => {
  return cart.cartItem;
});

export const selectDropDown = createSelector([selectCart], (cart) => {
  return cart.hidden;
});

//! When cartitem will change than it counts will execute

export const selectItemCount = createSelector([selectCartItem], (cartItem) => {
  return cartItem.reduce((acc, item) => acc + item.quantity, 0);
});

export const selectTotalAmount = createSelector([selectCartItem], (cartItem) =>
  cartItem.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
