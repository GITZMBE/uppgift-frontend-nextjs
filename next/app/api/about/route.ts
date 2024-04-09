import request from "@/src/lib/datocms";
import AboutPage from "@/src/models/aboutpage";

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
  const { page }: { page: AboutPage } = await request({ query });
  return new Response(JSON.stringify({ aboutpage: page }));
};