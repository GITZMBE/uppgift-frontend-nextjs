'use client';

import Container from '@/app/components/Container'
import Modal from '@/app/components/Modal';
import request from '@/app/lib/datocms';
import CartItem from '@/app/models/cartItem';
import Product from '@/app/models/product';
import { cartState } from '@/app/recoil';
import React, { useEffect, useState } from 'react'
import { Image, StructuredText } from 'react-datocms';
import { useRecoilState } from 'recoil';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);

  useEffect(() => {
    (async () => {
      const query = `query productCopy {
    product(filter: {id: {eq: "${ params.id }"}}) {
      id
      name
      price
      description {
        value
      }
      mainImage {
        responsiveImage(imgixParams: {fit: crop, auto: format, h: "300", w: "300"}) {
          src
          srcSet
          height
          width
        }
      }
      alternativeImages {
        responsiveImage(imgixParams: {w: "300", auto: format, fit: crop, h: "300"}) {
          height
          width
          srcSet
          src
        }
      }
    }
      }`;
      const data: any = await request({ query });
      setProduct(data.product);
    })();
  }, []);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }, [showModal]);

  const handleAddCartItem = () => {
    if (!product) {
      return;
    };

    setShowModal(true);
    setCart([...cart, new CartItem(product)]);
  };

  return product && (
    <Container>
      <Modal isOpen={showModal} success={true} title="Success" description="Item added to cart!" />
      <div className='flex gap-8 w-full md:p-4 rounded-xl shadow-lg'>
        <div className='space-y-2'>
          <Image data={product.mainImage.responsiveImage} />
          <div className='flex gap-2'>
            {
              product.alternativeImages && product.alternativeImages.map(img => (
                <Image data={img.responsiveImage} style={{ width: 96 }} className='aspect-square' />
              ))
            }        
          </div>        
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-4 py-4'>
            <h2 className='text-3xl font-medium'>{ product.name }</h2>
            <span className='text-xl font-semibold'>$ { product.price }</span>
          </div>
          <button className='py-2 px-4 bg-black text-light font-bold hover:text-white' onClick={handleAddCartItem}>Add to Cart</button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <StructuredText data={product.description.value} />
      </div>
    </Container>
  )
}

export default ProductPage