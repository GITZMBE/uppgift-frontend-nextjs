import React from "react";
import request from "../lib/datocms";
import { Image, StructuredText } from "react-datocms";
import Container from "../components/Container";

const About = async () => {
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
  const data: any = await request({ query });
  const aboutpage = data.page;

  return (
    <>
      <div className="relative flex items-center max-h-[50vh] overflow-hidden">
        <Image data={aboutpage.mainImage.responsiveImage} />
        <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8 md:px-12 backdrop-brightness-50">
          <h1 className="text-[#EEEEEE] text-8xl text-center font-bold">{ aboutpage.title } Us</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full py-4 px-4 sm:px-8 md:px-12 [&_h2]:font-bold [&_h2]:text-2xl [&_h3]:font-bold [&_h3]:text-xl [&_blockquote]:italic">
        <h1 className="text-3xl font-bold">{ aboutpage.title }</h1>
        <StructuredText data={ aboutpage.content.value } />
      </div>
    </>
  );
};

export default About;
