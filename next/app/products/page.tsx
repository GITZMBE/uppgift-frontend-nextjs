import React from "react";
import Container from "../../src/components/Container";
import request from "../../src/lib/datocms";
import ProductRecord from "../../src/components/ProductRecord";
import Product from "../../src/models/product";

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
  const data = await request<{ allProducts: Product[] }>({ query });
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
