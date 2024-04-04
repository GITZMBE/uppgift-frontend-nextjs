import { atom } from "recoil";
import CartItem from "../models/cartItem";

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: []
});
