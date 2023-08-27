import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "./CategoryCard";
import AllCategoriesHook from "../../hooks/category/AllCategoriesHook";
import { LoadingSpinner } from "..";

const FeaturedCategories = () => {
  let limit = 10;
  const [catResults, loading, categories, pageCount, getPage] =
    AllCategoriesHook(limit);

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
          categories?.length >= 1 ? (
            categories?.map((item, index) => {
              return <CategoryCard category={item} key={index} />;
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
