import { StructuredText } from "react-datocms";
import Container from "./components/Container";
import request from "./lib/datocms";

// export const getStaticProps = async () => {
//   const query = `query productCopy {
//     allProducts {
//       price
//       name
//       mainImage {
//         url
//         width
//         title
//         size
//         id
//         height
//         format
//         filename
//         author
//         alt
//         responsiveImage {
//           width
//           title
//           srcSet
//           src
//           sizes
//           height
//           webpSrcSet
//           bgColor
//           base64
//           aspectRatio
//           alt
//         }
//       }
//       id
//     }
//   }`;

//   const data = await request({ query });

//   return {
//     props: { 
//       data 
//     }
//   };
// };

const Home = async () => {
  const query = `query productCopy {
    allProducts {
      price
      name
      mainImage {
        url
        width
        title
        size
        id
        height
        format
        filename
        author
        alt
        responsiveImage {
          width
          title
          srcSet
          src
          sizes
          height
          webpSrcSet
          bgColor
          base64
          aspectRatio
          alt
        }
      }
      id
      description {
        value
      }
    }
  }`;
  const data = await request({ query });
  const products = data?.allProducts || [];

  return (
    <Container>
      {
        products && products.map(product => {
          <StructuredText data={product.description.value} />
        })
      }
    </Container>
  );
};

export default Home;
