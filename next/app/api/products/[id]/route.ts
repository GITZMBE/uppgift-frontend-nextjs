import request from "@/src/lib/datocms";
import Product from "@/src/models/product";

export async function GET(req: Request, res: Response) {
  // console.log(req)
  // const url = new URL(req.url);
  // const searchParams = new URLSearchParams(url.searchParams);
  // console.log(searchParams)
  // const { id } = searchParams;
  const id = 24919271;
  const query = `query productCopy {
    Product(filter: {id: {eq: "${id}"}}) {
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
  const { Product } = await request<{ Product: Product }>({ query });
  return new Response(JSON.stringify({ product: Product}));
};