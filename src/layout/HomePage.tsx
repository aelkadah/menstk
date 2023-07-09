import { Container } from "react-bootstrap";
import slide1 from "../assets/images/slider/slide1.jpg";
import FeaturedCategories from "../components/category/FeaturedCategories";
import BestSellers from "../components/product/BestSellers";
import FeaturedBrands from "../components/brand/FeaturedBrands";

function HomePage() {
  return (
    <Container fluid>
      <Container className="mb-5">
        <img className="w-100 rounded-4" src={slide1} alt="First slide" />
      </Container>

      <Container className="py-5 bg-white">
        <FeaturedCategories />
      </Container>

      <Container className="py-5" fluid>
        <BestSellers />
      </Container>

      <Container className="py-5 bg-white">
        <FeaturedBrands />
      </Container>
    </Container>
  );
}

export default HomePage;
