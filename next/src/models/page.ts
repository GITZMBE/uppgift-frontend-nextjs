interface Page {
  id: string;
  title: string;
  mainImage: {
    responsiveImage: {
      srcSet: string;
      src: string;
      width: number;
      height: number;
    }
  }
  content: {
    value: any
  }
};

export default Page;