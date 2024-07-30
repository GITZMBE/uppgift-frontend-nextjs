import Link from "next/link";
import React from "react";
import { Image } from "react-datocms";
import Product from "../../models/product";
import formatPrice from "@/src/utils";

const ProductRecord = ({ product }: { product: Product }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  return (
    <Link
      href={`/products/${product.id}`}
      className='flex flex-col items-center gap-4 w-64 h-64 p-6 rounded-3xl border-gray-300 border-2 overflow-hidden'
    >
      <Image
        className='rounded-full'
        data={product.mainImage.responsiveImage}
      />
      <h2 className='font-semibold text-lg sm:text-base'>{product.name}</h2>
      <span className='text-3xl sm:text-2xl font-bold'>{formatPrice.format(product.price)}</span>
    </Link>
  );
};

export default ProductRecord;
