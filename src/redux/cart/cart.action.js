import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const setCartItems = (cartItems) => ({
  type: CartActionTypes.SET_CART_ITEMS,
  payload: cartItems,
});
