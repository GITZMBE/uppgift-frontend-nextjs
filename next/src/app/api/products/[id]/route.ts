import request from "@/lib/datocms";
import Product from "@/models/product";
import { gql } from "graphql-request";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  
  const query = gql`{
    product(filter: {id: {eq: "${id}"}}) {
      id
      price
      name
      description {
        value
      }
      alternativeImages {
        responsiveImage(imgixParams: {auto: format, h: "100", w: "100", fit: crop}) {
          src
          srcSet
          width
          height
        }
      }
      mainImage {
        responsiveImage(imgixParams: {auto: format, fit: crop, h: "500", w: "500"}) {
          height
          src
          srcSet
          width
        }
      }
    }
  }`;
  const { product } = await request<{ product: Product }>({ query });
  return new Response(JSON.stringify({ product: product }));
}
