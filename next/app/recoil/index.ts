import { atom } from "recoil";
import CartItem from "../models/cartItem";

interface ICartState {
  key: string;
  default: CartItem[];
}

const defaultCartState: ICartState = {
  key: "cartState",
  default: []
};

export const cartState = atom<ICartState>({
  ...defaultCartState
});
