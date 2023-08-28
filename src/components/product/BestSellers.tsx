import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SecTitle from "../utilities/SecTitle";
import { LoadingSpinner } from "..";
import ProductCard from "./ProductCard";
import AllProductsHook from "../../hooks/product/AllProductsHook";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1199.98, min: 992 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 991.98, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767.98, min: 0 },
    items: 1,
  },
};

const BestSellers = () => {
  const [productResults, products, pageCount, getPage, loading] =
    AllProductsHook(10);

  return (
    <Container>
      <SecTitle title="أفضل العروض" btnText="تسوق الآن" url="/products" />

      {!loading ? (
        <Carousel
          responsive={responsive}
          arrows={true}
          rtl
          itemClass="mx-2"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass="pb-5 pt-4"
        >
          {products?.length >= 1 ? (
            products?.map((item, index) => {
              return <ProductCard product={item} key={index} />;
            })
          ) : (
            <h3 className="text-center">لا يوجد منتجات الآن</h3>
          )}
        </Carousel>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

export default BestSellers;
