import request from "@/src/lib/datocms";
import { Page } from '@/src/models';

export async function GET(req: Request, context: any) {
  const { params } = context;
  const { slug } = params;
  
  const query = `query productCopy {
    page(filter: {slug: {eq: "${slug}"}}) {
      id
      title
      mainImage {
        responsiveImage(imgixParams: {auto: format, w: "2000", fit: crop, h: "2000"}) {
          srcSet
          src
          width
          height
        }
      }
      content {
        value
      }
    }
  }`;
  const { page } = await request<{ page: Page }>({ query });
  return new Response(JSON.stringify({ page: page }));
}