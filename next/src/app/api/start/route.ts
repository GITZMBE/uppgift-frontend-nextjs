import request from "@/lib/datocms";
import StartPage from "@/models/startpage";
import { gql } from "graphql-request";

export const GET = async (req: Request, res: Response) => {
  const query = gql`{
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