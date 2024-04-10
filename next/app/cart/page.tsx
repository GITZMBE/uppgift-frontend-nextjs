"use client";

import React from "react";
import Container from "../../src/components/Container";
import CartItemRecord from "../../src/components/ui/CartItemRecord";
import CartItem from "../../src/models/cartItem";
import { useRecoilState } from "recoil";
import { cartState } from "../../src/recoil";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);

  return (
    <Container>
      {cart.length > 0 ? (
        <div className='flex flex-col gap-4 items-center'>
          <div className='w-full lg:max-w-[60vw] flex flex-col gap-4'>
            <h2 className='text-3xl'>Cart</h2>
            <div className='flex flex-col gap-4'>
              {cart &&
                cart.map((item: CartItem) => (
                  <div key={item.id}>
                    <CartItemRecord item={item} />
                  </div>
                ))}
            </div>
          </div>
          <Link
            href='/checkout'
            className='py-2 px-4 bg-black text-light hover:text-white'
          >
            Go to checkout
          </Link>
        </div>
      ) : (
        <div className='w-full h-[70vh] flex justify-center items-center'>
          <h1 className='text-center text-6xl font-bold'>
            Your cart is empty.
          </h1>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
