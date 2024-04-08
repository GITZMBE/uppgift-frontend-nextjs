"use client";

import { orderState } from "@/src/recoil";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";

const OrderConfirmationPage = () => {
  const [ input, setInput ] = useRecoilState(orderState);

  const handleGoToHomePage = () => {
    setInput({
      cardNumber: "",
      expire: "",
      cvc: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    });
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-6xl'>Thank You!</h1>
        <FaCheckCircle size={64} color='green' />
        <p className='text-center'>
          We are getting started on your order right away, and you will receive
          an order confirmation shortly to {input.email}.<br /> In the meantime,
          read more about Consid, just head over to{" "}
          <Link href='' className='font-bold'>
            Consid
          </Link>
        </p>
        <Link
          href='/'
          onClick={handleGoToHomePage}
          className='bg-black py-2 px-4 font-bold text-light hover:text-white'
        >
          Go back here
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
