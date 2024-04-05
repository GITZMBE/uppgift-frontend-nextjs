'use client';

import Container from '@/app/components/Container'
import Modal from '@/app/components/Modal';
import useShowModal from '@/app/hooks/useShowModal';
import useUpdateCart from '@/app/hooks/useUpdateCart';
import request from '@/app/lib/datocms';
import CartItem from '@/app/models/cartItem';
import Product from '@/app/models/product';
import { cartState, getCartItemQuantity } from '@/app/recoil';
import React, { useEffect, useState } from 'react'
import { Image, StructuredText } from 'react-datocms';
import { useRecoilState } from 'recoil';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const {showModal, setShowModal} = useShowModal();
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);
  const {quantity, setQuantity} = useUpdateCart(params.id);

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
            responsiveImage(imgixParams: {fit: crop, auto: format, w: "316", h: "316"}) {
              src
              srcSet
              height
              width
            }
          }
          alternativeImages {
            responsiveImage(imgixParams: {fit: crop, auto: format, w: "100", h: "100"}) {
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

  const handleAddCartItem = () => {
    if (!product) {
      return;
    };

    setShowModal(true);
    if (quantity === 0) {
      setCart([...cart, new CartItem(product)]);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return product && (
    <Container>
      <Modal isOpen={showModal} success={true} title="Success" description="Item added to cart!" />
        <div className='flex flex-col lg:flex-row gap-8 w-full p-4 rounded-xl shadow-lg'>
          <div className='w-[316px] aspect-square space-y-2'>
            <Image data={product.mainImage.responsiveImage} className='w-full' />
            <div className='flex gap-2'>
              {
                product.alternativeImages && product.alternativeImages.map(img => (
                  <Image data={img.responsiveImage} style={{ width: 100 }} className='aspect-square' />
                ))
              }        
            </div>        
          </div>
          <div className='lg:w-2/3 flex flex-col justify-between'>
            <div className='flex flex-col gap-4 py-4'>
              <h2 className='text-3xl font-medium'>{ product.name }</h2>
              <span className='text-xl font-semibold'>$ { product.price }</span>
              <div className='flex flex-col items-start gap-4 [&_h2]:font-bold [&_h2]:text-2xl [&_h3]:font-bold [&_h3]:text-xl [&_ol]:list-disc [&_ol]:ml-8 [&_blockquote]:italic'>
                <StructuredText data={product.description.value} />
              </div>
            </div>
            <button className='w-fit py-2 px-4 bg-black text-light font-bold hover:text-white' onClick={handleAddCartItem}>Add to Cart</button>
          </div>
        </div>
    </Container>
  )
}

export default ProductPage;