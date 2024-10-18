import request from "@/lib/datocms";
import Product from "@/models/product";

export const GET = async (req: Request, res: Response) => {
  const query = `query productCopy {
    allProducts {
      id
      name
      price
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
  const { allProducts } = await request<{ allProducts: Product[] }>({ query });
  return new Response(JSON.stringify({ products: allProducts}));
};
