import { Page } from "@/src/models";
import React from "react";
import { Image, StructuredText } from "react-datocms";

const AboutPage = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/api/pages/about");
  const { page }: { page: Page } = await data.json();

  return (
    <>
      <div className='relative flex items-center max-h-[50vh] overflow-hidden'>
        <Image data={page.mainImage.responsiveImage} />
        <div className='absolute inset-0 flex justify-center items-center px-4 sm:px-8 md:px-12 backdrop-brightness-50'>
          <h1 className='text-[#EEEEEE] text-8xl text-center font-bold'>
            {page.title} Us
          </h1>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full py-4 px-4 sm:px-8 md:px-12 [&_h2]:font-bold [&_h2]:text-2xl [&_h3]:font-bold [&_h3]:text-xl [&_blockquote]:italic'>
        <h1 className='text-3xl font-bold'>{page.title}</h1>
        <StructuredText data={page.content.value} />
      </div>
    </>
  );
};

export default AboutPage;
