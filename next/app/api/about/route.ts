import request from "@/src/lib/datocms";

export const GET = async (req: Request, res: Response) => {
  const query = `query productCopy {
    page(filter: {slug: {eq: "about"}}) {
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
  const { page }: { page: any } = await request({ query });
  return new Response(JSON.stringify({ aboutpage: page }));
};