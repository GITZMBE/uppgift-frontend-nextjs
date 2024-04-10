import request from "@/src/lib/datocms";
import Product from "@/src/models/product";

export async function GET(req: Request, res: Response) {
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
