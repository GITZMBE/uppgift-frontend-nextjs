import { useRecoilState } from "recoil";
import CartItem from "../models/cartItem";
import { cartState, removeCartItem, updateCartItemQuantity } from "../recoil";
import { useEffect, useState } from "react";


const useUpdateCart = ( id: string, qty: number ) => {
  const [quantity, setQuantity] = useState<number>(qty);
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);

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

export default useUpdateCart;