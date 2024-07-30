import request from "@/src/lib/datocms";
import Product from "@/src/models/product";

export async function GET(req: Request, context: any) {
  const { params } = context;
  const { id } = params;
  
  const query = `query productCopy {
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
