import React from "react";
import { CartItemContainer, ItemDetailsContainer, ItemDetailsNameContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemDetailsNameContainer>{name}</ItemDetailsNameContainer>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
