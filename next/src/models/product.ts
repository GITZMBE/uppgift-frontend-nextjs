export interface Product {
  id: string
  name: string
  price: number
  description: {
    value: any
  }
  mainImage: {
    responsiveImage: {
      height: number
      width: number
      srcSet: string
      src: string
    }
  }
  alternativeImages: {
    responsiveImage: {
      height: number;
      width: number;
      srcSet: string;
      src: string;
    }
  }[]
};

export default Product;