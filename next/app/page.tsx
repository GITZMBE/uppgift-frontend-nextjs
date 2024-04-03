import { Image, StructuredText } from "react-datocms";
import request from "./lib/datocms";

const Home = async () => {
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
  const data = await request({ query });
  const startpage = data?.startpage;

  return (
    <div className="w-full min-h-screen">
      {
        startpage && (
          <>
            <div className="relative">
              <Image data={startpage.mainImage.responsiveImage} />
              <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8 md:px-12 backdrop-brightness-50">
                <h1 className="text-[#EEEEEE] text-6xl text-center font-bold">{ startpage.title }</h1>
              </div>
            </div>
            <div className="w-full px-4 sm:px-8 md:px-12 py-4">
              <StructuredText data={startpage.content.value} />
            </div>          
          </>
        )
      }
    </div>
  );
};

export default Home;
