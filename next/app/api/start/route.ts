import request from "@/src/lib/datocms";
import StartPage from "@/src/models/startpage";

export async function GET(req: Request, res: Response) {
  const query = `query productCopy {
    startpage {
      title
      id
      mainImage {
        responsiveImage(imgixParams: {fit: crop, auto: format}) {
          src
          srcSet
          height
          width
        }
      }
      content {
        value
      }
    }
  }`;
  const { startpage } = await request<{ startpage: StartPage }>({ query });
  return new Response(JSON.stringify({ startpage: startpage }));
};