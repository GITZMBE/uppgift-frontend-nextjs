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

const cartItemExist = (cart: CartItem[], id: string): boolean => {
  return cart.some((item) => item.id == id);
};

export const getCartItemQuantity = (cart: CartItem[], id: string): number => {
  const exist = cartItemExist(cart, id);

  if (exist) {
    return cart.find((item) => item.id === id)!.quantity;
  }

  return 0;
};

export const removeCartItem = (cart: CartItem[], id: string) => {
  return cart.filter((ct) => ct.id !== id);
};

export const getCartValue = (cart: CartItem[]): number => {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity
  }

  return total;
};
