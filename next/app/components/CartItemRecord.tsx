'use client';

import React from 'react'
import CartItem from '../models/cartItem'
import { Image } from 'react-datocms';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import useUpdateCart from '../hooks/useUpdateCart';

const CartItemRecord = ({ item }: { item: CartItem }) => {
  const { quantity, setQuantity } = useUpdateCart( item.id );

  return (
    <div className='group relative flex justify-between gap-12 w-full p-4 pr-16 rounded-lg border-2 border-gray-300' onClick={_ => {console.log("hello")}}>
      <div className='flex items-center gap-4'>
        <Image data={item.mainImage.responsiveImage} style={{ width: 100, height: 100 }} />
        <div className='flex flex-col justify-between h-full'>
          <h2 className='text-xl font-bold'>{ item.name }</h2>
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <div className='flex items-center gap-4'>
          <button className='flex justify-center items-center w-12 aspect-square rounded-full text-3xl' onClick={_ => setQuantity(quantity - 1 >= 0 ? quantity - 1 : 0)}><FaMinusCircle size={36} className="opacity-75 hover:opacity-100" /></button>
          <span className='w-8 text-center text-xl'>{ quantity }</span>
          <button className='flex justify-center items-center w-12 aspect-square rounded-full text-3xl' onClick={_ => setQuantity(quantity + 1)}><FaPlusCircle size={36} className="opacity-75 hover:opacity-100" /></button>
        </div>
        <span className='w-20 text-center text-2xl'>$ { item.price * quantity }</span>
        <RxCross2 size={24} className='absolute right-4 hidden group-hover:block opacity-50 hover:opacity-100 cursor-pointer' onClick={_ => setQuantity(0)} />
      </div>
    </div>
  )
}

export default CartItemRecord;