import { Button, Card, Col, Container } from "react-bootstrap";
import { ProductCard } from "..";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import iphone1 from "../../assets/images/iphone/1.jpg";
import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BestSellers = () => {
  return (
    <Container className="py-5" style={{ backgroundColor: "#f1f7fc" }} fluid>
      <Col xs={4}>
        <ProductCard image={iphone1} />
      </Col>

      <Container className="my-5">
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
    </Container>
  );
};

export default BestSellers;
