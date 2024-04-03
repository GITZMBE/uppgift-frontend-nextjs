import React from 'react'
import Container from '../components/Container'
import request from '../lib/datocms';
import ProductRecord from '../components/ProductRecord';

const ProductsPage = async () => {
  const query = `query productCopy {
    allProducts {
      id
      name
      price
      mainImage {
        width
        url
        id
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
  const data = await request({ query });
  const products = data?.allProducts;

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