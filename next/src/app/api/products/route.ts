import request from "@/lib/datocms";
import Product from "@/models/product";
import { gql } from "graphql-request";

export const GET = async (req: Request, res: Response) => {
  const query = gql`{
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
