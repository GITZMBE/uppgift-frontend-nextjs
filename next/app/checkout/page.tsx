"use client";

import CartItemRecord from "@/src/components/CartItemRecord";
import CartItem from "@/src/models/cartItem";
import { cartState } from "@/src/recoil";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

const CheckoutPage = () => {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div className='w-full h-screen flex gap-8 py-24 px-4 sm:px-8 md:px-12'>
      <div className='w-full lg:max-w-[45vw] flex flex-col gap-4 p-4 shadow-lg rounded-xl'>
        <h2 className='text-2xl font-bold py-4 border-b-2 border-gray-300'>
          Checkout
        </h2>
        <div className='flex flex-col gap-4 overflow-y-scroll scroll-hidden'>
          {cart &&
            cart.map((item: CartItem) => (
              <CartItemRecord key={item.id} item={item} />
            ))
          }
        </div>
        <div className="w-full flex justify-between items-center gap-4 text-xl">
          <span className="font-semibold">Total</span>
          <span className="font-bold">
            {}
          </span>          
        </div>
      </div>
      <div className='w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-4 p-4 shadow-lg rounded-xl'>
          <h2 className='text-2xl font-bold border-b-2 py-4 border-gray-300'>
            {" "}
            Delivery Info
          </h2>
        </div>
        <div className='flex flex-col gap-4 p-4 shadow-lg rounded-xl'>
          <h2 className='text-2xl font-bold border-b-2 py-4 border-gray-300'>
            Payment Methods
          </h2>
          <Link
          href='/checkout'
          className='py-2 px-4 bg-black text-light hover:text-white'
          >
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
