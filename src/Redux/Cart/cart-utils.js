export const addItem = (cart, itemToAdd) => {
  const exist = cart.find((cartItem) => cartItem.id === itemToAdd.id);

  if (!exist) return [...cart, { ...itemToAdd, quantity: 1 }];

  return cart.map((carItem) =>
    carItem.id === itemToAdd.id
      ? { ...carItem, quantity: carItem.quantity + 1 }
      : carItem
  );
};
