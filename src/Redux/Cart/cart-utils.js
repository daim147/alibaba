export const addItem = (cart, itemToAdd) => {
  const exist = cart.find((cartItem) => cartItem.id === itemToAdd.id);

  if (!exist) return [...cart, { ...itemToAdd, quantity: 1 }];

  return cart.map((carItem) =>
    carItem.id === itemToAdd.id
      ? { ...carItem, quantity: carItem.quantity + 1 }
      : carItem
  );
};

export const removeItem = (cart, itemToRemove) => {
  const exist = cart.find((item) => item.id === itemToRemove.id);

  if (exist.quantity === 1) {
    return cart.filter((item) => item.id !== itemToRemove.id);
  }

  return cart.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
