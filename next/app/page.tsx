import { Image, StructuredText } from "react-datocms";
import request from "../src/lib/datocms";
import StartPage from "@/src/models/startpage";

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
  const data = await request<{ startpage: StartPage }>({ query });
  const startpage = data.startpage;

  return (
    <div className='w-full min-h-[200vh]'>
      {startpage && (
        <>
          <div className='relative flex items-center max-h-[50vh] overflow-hidden'>
            <Image data={startpage.mainImage.responsiveImage} />
            <div className='absolute inset-0 flex justify-center items-center px-4 sm:px-8 md:px-12 backdrop-brightness-50'>
              <h1 className='text-light text-6xl text-center font-bold'>
                {startpage.title}
              </h1>
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full px-4 sm:px-8 md:px-12 py-4'>
            <StructuredText data={startpage.content.value} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
