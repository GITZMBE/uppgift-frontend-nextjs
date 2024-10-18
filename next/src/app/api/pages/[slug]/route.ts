import request from "@/lib/datocms";
import { Page } from '@/models';
import { gql } from "graphql-request";

export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
  const { slug } = params;
  
  const query = gql`{
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