"use client";

import React from "react";
import Container from "../components/Container";
import CartItemRecord from "../components/CartItemRecord";
import CartItem from "../models/cartItem";
import { useRecoilState } from "recoil";
import { cartState } from "../recoil";

const CartPage = async () => {
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);

  // todo
  // check if cart item already is in  the cart. If so, increment quantity instead of adding a new one by filtering and then change amount

  return (
    <Container>
      {
        cart.length > 0 ? (
          <div className='w-full lg:max-w-[60vw] flex flex-col gap-4'>
            <h2 className='text-3xl'>Cart</h2>
            <div className='flex flex-col gap-4'>
              { 
                cart && cart.map((item: CartItem) => (
                  <CartItemRecord item={item} />
                ))
              }
            </div>
          </div>
        ) : (
          <div className="w-full h-[70vh] flex justify-center items-center">
            <h1 className='text-center text-6xl font-bold'>
              Your cart is empty.
            </h1>            
          </div>
        )
      }
    </Container>
  );
};

export default CartPage;
