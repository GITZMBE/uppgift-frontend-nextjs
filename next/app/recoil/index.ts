import { atom } from "recoil";
import CartItem from "../models/cartItem";

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

export const updateCartItemQuantity = (
  cart: CartItem[],
  id: string,
  quantity: number
) => {
  return cart.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: quantity };
    }
    return item;
  });
};
