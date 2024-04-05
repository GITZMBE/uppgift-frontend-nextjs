import { useRecoilState } from "recoil";
import CartItem from "../models/cartItem";
import { cartState, getCartItemQuantity, removeCartItem, updateCartItemQuantity } from "../recoil";
import { useEffect, useState } from "react";


export const useUpdateCart = ( id: string ) => {
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);
  const qty = getCartItemQuantity(cart, id);
  const [quantity, setQuantity] = useState<number>(qty);

  useEffect(() => {
    if (quantity <= 0) {
      const filteredCart = removeCartItem(cart, id);
      setCart(filteredCart);
      return;
    }

    const newCart = updateCartItemQuantity(cart, id, quantity);
    setCart(newCart);
  }, [quantity]);

  return { quantity, setQuantity };
};