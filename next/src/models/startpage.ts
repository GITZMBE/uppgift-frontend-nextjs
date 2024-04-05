interface StartPage {
      title: string;
      id: string;
      mainImage: {
        responsiveImage: {
          src: string;
          srcSet: string;
          height: number;
          width: number;
        }
      }
      content: {
        value: any
      }
};

export default StartPage;