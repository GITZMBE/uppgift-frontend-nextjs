import React from "react";
import Product from "../../models/product";
import { Image, StructuredText } from "react-datocms";
import Link from "next/link";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { formatPrice } from "@/utils";

interface Props {
  product: Product | null;
  addToCart: () => void;
}

export const ProductDetail = ({ addToCart, product }: Props) => {
  return (
    product !== null && (
      <div className='flex flex-col lg:flex-row gap-8 w-full p-4 rounded-xl shadow-lg'>
        <div className='xs:w-[316px] aspect-square space-y-2'>
          <Image data={product.mainImage.responsiveImage} className='w-full' />
          <div className='flex gap-2'>
            {product.alternativeImages &&
              product.alternativeImages.map((img, i) => (
                <Image
                  key={i}
                  data={img.responsiveImage}
                  style={{ width: 100 }}
                  className='aspect-square'
                />
              ))}
          </div>
        </div>
        <div className='lg:w-2/3 flex flex-col justify-between'>
          <div className='flex flex-col gap-4 py-4'>
            <Link href='/products' className="flex items-center gap-2 font-bold"><div className="flex items-center"><FaAngleDoubleLeft /></div> Products</Link>
            <h2 className='text-3xl font-medium'>{product.name}</h2>
            <span className='text-xl font-semibold'>{formatPrice.format(product.price)}</span>
            <div className='flex flex-col items-start gap-4 structuredText'>
              <StructuredText data={product.description.value} />
            </div>
          </div>
          <button
            className='w-fit py-2 px-4 bg-black text-light font-bold hover:text-white'
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
