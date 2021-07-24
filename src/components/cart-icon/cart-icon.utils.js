export const countCartItems = (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);
};
