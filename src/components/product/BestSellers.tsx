import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "..";

import iphone1 from "../../assets/images/iphone/1.jpg";
import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";

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
    items: 2,
  },
};

const BestSellers = () => {
  return (
    <Container>
      <Carousel
        responsive={responsive}
        arrows={true}
        rtl
        itemClass="mx-2"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="py-5"
      >
        <ProductCard image={iphone1} />
        <ProductCard image={watch1} />
        <ProductCard image={watch2} />
        <ProductCard image={watch3} />
        <ProductCard image={watch4} />
        <ProductCard image={watch5} />
        <ProductCard image={iphone1} />
      </Carousel>
    </Container>
  );
};

export default BestSellers;
