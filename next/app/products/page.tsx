import React from "react";
import Container from "../../src/components/Container";
import ProductRecord from "../../src/components/ui/ProductRecord";
import Product from "../../src/models/product";

const ProductsPage = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/api/products", {
    method: "GET",
    cache: "no-cache",
  });
  const { products }: { products: Product[] } = await data.json();

  return (
    <Container>
      <div className='flex flex-col items-center gap-12'>
        <h1 className='text-3xl md:text-6xl text-center font-semibold leading-[36px] md:leading-[80px]'>
          Featured Products
        </h1>
        <div className='flex justify-center md:justify-start basis-auto flex-wrap flex-grow-1 gap-4'>
          {products &&
            products.map((product: Product) => (
              <ProductRecord key={product.id} product={product} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
