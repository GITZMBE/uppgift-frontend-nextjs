import React from "react";
import Container from "../components/Container";
import request from "../lib/datocms";
import ProductRecord from "../components/ProductRecord";
import Product from "../models/product";

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
        responsiveImage(imgixParams: {fit: crop, auto: format, h: "100", w: "100"}) {
          height
          width
          srcSet
          src
        }
      }
    }
  }`;
  const data: any = await request({ query });
  const products: Product[] = data.allProducts;

  return (
    <Container>
      <div className='flex flex-col items-center gap-12'>
        <h1 className='text-2xl md:text-6xl text-center font-semibold leading-[36px] md:leading-[80px]'>
          Featured Products
        </h1>
        <div className='flex justify-start basis-auto flex-wrap flex-grow-1 gap-4'>
          {products &&
            products.map((product) => (
              <ProductRecord product={product} key={product.id} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
