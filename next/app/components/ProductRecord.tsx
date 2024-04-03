import Link from 'next/link';
import React from 'react'
import { Image } from 'react-datocms'

const ProductRecord = ({ product }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  return (
  <Link href={ baseUrl + `/products/${ product.id }`} className='flex flex-col items-center gap-4 w-64 h-64 p-6 rounded-3xl border-gray-300 border-2 overflow-hidden'>
      <Image className='rounded-full' data={product.mainImage.responsiveImage} />
      <h2 className='font-semibold'>{ product.name }</h2>
      <span className='text-2xl font-bold'>$ { product.price.toFixed(2) }</span>
    </Link>
  )
}

export default ProductRecord