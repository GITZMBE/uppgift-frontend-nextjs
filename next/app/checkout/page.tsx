"use client";

import CartItemRecord from "@/src/components/CartItemRecord";
import {Input} from "@/src/components";
import CartItem from "@/src/models/cartItem";
import { cartState, getCartValue } from "@/src/recoil";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();

  const [cart, setCart] = useRecoilState(cartState);
  const deliveryFee = 0;
  const [input, setInput] = useState({
    cardNumber: "",
    expire: "",
    cvc: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/order_confirmation');
  };

  return (
    <div className='w-full min-h-screen flex gap-8 py-24 px-4 sm:px-8 md:px-12'>
      <div className='w-full lg:max-w-[45vw] flex flex-col gap-4 p-6 shadow-lg rounded-xl'>
        <h2 className='text-2xl font-bold py-4 border-b-2 border-gray-300'>
          Checkout
        </h2>
        <div className='flex flex-col h-full gap-4 pb-4 border-b-2 border-gray-300 overflow-y-scroll scroll-hidden'>
          {cart &&
            cart.map((item: CartItem) => (
              <CartItemRecord key={item.id} item={item} />
            ))
          }
        </div>
        <div className="space-y-2 py-4 border-b-2 border-gray-300">
          <div className="w-full flex justify-between items-center gap-4 text-xl">
            <span className="font-semibold opacity-75">Subtotal</span>
            <span className="font-bold">
              $ { getCartValue(cart) }
            </span>
          </div>
          <div className="w-full flex justify-between items-center gap-4 text-xl">
            <span className="font-semibold opacity-75">Delivery fee</span>
            <span className="font-bold">
              $ { deliveryFee }
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-4 text-xl">
          <span className="font-semibold opacity-75">Total</span>
          <span className="font-bold">
            $ { getCartValue(cart) + deliveryFee }
          </span>
        </div>
      </div>
      <div className='w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-4 p-6 shadow-lg rounded-xl'>
          <h2 className='text-2xl font-bold border-b-2 py-4 border-gray-300'>
            Delivery Info
          </h2>
          <div className='flex flex-col gap-4'>
            <div className="flex gap-4">
              <Input name="cardNumber" value={input} setValue={setInput} placeholder="Card Number" pattern="^(?:\d{4}[- ]?){3}\d{4}$" required={true} />
            </div>
            <div className="flex gap-4">
              <Input name="expire" value={input} setValue={setInput} placeholder="Expire" pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" required={true} />
              <Input name="cvc" value={input} setValue={setInput} placeholder="CVC" pattern="^(?!000)\d{3,4}$" required={true} />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 p-6 shadow-lg rounded-xl'>
          <h2 className='text-2xl font-bold border-b-2 py-4 border-gray-300'>
            Payment Methods
          </h2>
          <form className="space-y-4" id="paymentForm" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <Input name="firstName" value={input} setValue={setInput} placeholder="First Name" pattern="^[A-Za-z]+(?:[-' ][A-Za-z]+)?$" required={true} />
              <Input name="lastName" value={input} setValue={setInput} placeholder="Last Name" pattern="^[A-Za-z]+(?:[-' ][A-Za-z]+)?$" required={true} />
            </div>
            <div className="flex gap-4">
              <Input name="address" value={input} setValue={setInput} placeholder="Address" pattern="^[a-öA-Ö]+\w\s\d+$" required={true} />
            </div>
            <div className="flex gap-4">
              <Input name="city" value={input} setValue={setInput} placeholder="City" pattern="^[A-Za-z]+(?:[-' ][A-Za-z]+)?$" required={true} />
              <Input name="state" value={input} setValue={setInput} placeholder="State" pattern="^(?:AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)$" />
            </div>
            <div className="flex gap-4">
              <Input name="zip" value={input} setValue={setInput} placeholder="Zip" pattern="^\d{3}\s?\d{2}$" required={true} />
              <Input name="phone" value={input} setValue={setInput} placeholder="Phone" pattern="^\d{10}$" required={true} />
            </div>
            <div className="w-full flex flex-col items-center">
              <button type="submit" className='py-2 px-4 bg-black text-light hover:text-white'>
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
