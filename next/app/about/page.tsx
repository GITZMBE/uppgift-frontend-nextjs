import AboutPage from "@/src/models/aboutpage";
import React from "react";
import { Image, StructuredText } from "react-datocms";

const About = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/api/about");
  const { aboutpage }: { aboutpage: AboutPage } = await data.json();

  return (
    <>
      <div className='relative flex items-center max-h-[50vh] overflow-hidden'>
        <Image data={aboutpage.mainImage.responsiveImage} />
        <div className='absolute inset-0 flex justify-center items-center px-4 sm:px-8 md:px-12 backdrop-brightness-50'>
          <h1 className='text-[#EEEEEE] text-8xl text-center font-bold'>
            {aboutpage.title} Us
          </h1>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full py-4 px-4 sm:px-8 md:px-12 [&_h2]:font-bold [&_h2]:text-2xl [&_h3]:font-bold [&_h3]:text-xl [&_blockquote]:italic'>
        <h1 className='text-3xl font-bold'>{aboutpage.title}</h1>
        <StructuredText data={aboutpage.content.value} />
      </div>
    </>
  );
};

export default About;
