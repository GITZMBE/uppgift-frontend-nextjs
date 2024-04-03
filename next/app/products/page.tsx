import React from 'react'
import Container from '../components/Container'
import request from '../lib/datocms';
import ProductRecord from '../components/ProductRecord';
import Product from '../models/product';

const ProductsPage = async () => {
  const query = `query productCopy {
    allProducts {
      id
      name
      price
      description {
        value
      }
      mainImage {
        url
        title
        id
        height
        width
        responsiveImage(imgixParams: {fit: crop, auto: format, h: "100", w: "100"}) {
          height
          width
          srcSet
          src
          title
        }
      }
    }
  }`;
  const data: any = await request({ query });
  const products: Product[] = data?.allProducts;

  return (
    <Container>
      <h1 className='text-6xl font-semibold'>Featured Products</h1>
      <div className='flex justify-center gap-4 flex-wrap'>
        {
          products && products.map(product => (
            <ProductRecord product={product} key={product.id} />
          ))
        }        
      </div>
    </Container>
  )
}

export default ProductsPage