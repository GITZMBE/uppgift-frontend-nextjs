import Container from '@/app/components/Container'
import request from '@/app/lib/datocms';
import React from 'react'
import { Image, StructuredText } from 'react-datocms';

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const query = `query productCopy {
    product(filter: {id: {eq: "${ params.id }"}}) {
      price
      name
      description {
        value
      }
      id
      mainImage {
        url
        title
        id
        height
        format
        width
        author
        filename
        responsiveImage(imgixParams: {fit: crop, auto: format, h: "300", w: "300"}) {
          src
          srcSet
          height
          width
        }
      }
    }
  }`;
  const data = await request({ query });
  const product = data?.product;

  return (
    <Container>
      <Image data={product.mainImage.responsiveImage} />
      <div className='flex flex-col items-center gap-4'>
        <StructuredText data={product.description.value} />
      </div>
      
    </Container>
  )
}

export default ProductPage