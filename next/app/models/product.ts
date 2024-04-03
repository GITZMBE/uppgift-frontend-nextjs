interface Product {
  id: string
  name: string
  price: string
  description: {
    value: any
  }
  mainImage: {
    url: string
    title: string
    id: string
    height: number
    width: number
    responsiveImage: {
      height: number
      width: number
      srcSet: string
      src: string
      title: string
    }
  }
};

export default Product;