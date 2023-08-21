import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LoadingSpinner } from "..";
import BrandCard from "./BrandCard";
import AllBrandsHook from "../../hooks/brands/AllBrandsHook";

const FeaturedCategories = () => {
  let limit = 10;
  const [loading, results, brands, pageCount, getPage] = AllBrandsHook(limit);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 7,
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
      items: 2,
    },
  };

  return (
    <Container>
      <Carousel
        responsive={responsive}
        arrows={true}
        rtl
        itemClass="mx-2"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        containerClass="pb-3"
      >
        {!loading ? (
          brands?.length >= 1 ? (
            brands?.map((item, index) => {
              return <BrandCard brand={item} key={index} />;
            })
          ) : (
            <LoadingSpinner />
          )
        ) : (
          <LoadingSpinner />
        )}
      </Carousel>
    </Container>
  );
};

export default FeaturedCategories;
