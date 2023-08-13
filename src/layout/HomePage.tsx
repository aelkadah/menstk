import { Container } from "react-bootstrap";
import FeaturedCategories from "../components/category/FeaturedCategories";
import BestSellers from "../components/product/BestSellers";
import FeaturedBrands from "../components/brand/FeaturedBrands";

import slide1 from "../assets/images/slider/slide4.jpg";

function HomePage() {
  return (
    <Container fluid>
      <Container className="my-4">
        <img className="w-100" src={slide1} alt="First slide" />
      </Container>

      <Container className="py-5 bg-white">
        <FeaturedCategories />
      </Container>

      <Container className="pt-5" fluid>
        <BestSellers />
      </Container>

      <Container className="p-5  bg-white">
        <FeaturedBrands />
      </Container>
    </Container>
  );
}

export default HomePage;
