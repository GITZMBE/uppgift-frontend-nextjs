import Container from '@/app/components/Container'
import request from '@/app/lib/datocms';
import Product from '@/app/models/product';
import React from 'react'
import { Image, StructuredText } from 'react-datocms';

const ProductPage = async ({ params }: { params: { id: string } }) => {
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
  const product: Product = data.product;

  return (
    <Container>
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
        <div>
          <h2>{ product.name }</h2>
          <span>{ product.price }</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <StructuredText data={product.description.value} />
      </div>
      
    </Container>
  )
}

export default ProductPage