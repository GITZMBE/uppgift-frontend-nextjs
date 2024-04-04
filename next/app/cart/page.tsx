'use client';

import React from 'react'
import Container from '../components/Container'
import CartItemRecord from '../components/CartItemRecord'
import Product from '../models/product';
import request from '../lib/datocms';
import CartItem from '../models/cartItem';

const CartPage = async () => {
  // temporary
  const query = `query productCopy {
    product(filter: {id: {eq: "24919275"}}) {
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
  const product: Product = data.product;
  const item = new CartItem(product, 1);
  const cart = [item];
  // 

  return (
    <Container>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl'>Cart</h2>
        <div className='w-full flex flex-col gap-4'>
          {
            cart && cart.map(item => (
              <CartItemRecord item={ item } />
            ))
          }
        </div>        
      </div>
    </Container>
  )
}

export default CartPage