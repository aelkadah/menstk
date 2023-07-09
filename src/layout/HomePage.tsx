import { Container } from "react-bootstrap";
import Header from "../components/utilities/Header";
import slide1 from "../assets/images/slider/slide1.jpg";
import BestSellers from "../components/product/BestSellers";
import FeaturedCategories from "../components/category/FeaturedCategories";
import FeaturedBrands from "../components/brand/FeaturedBrands";
import Footer from "../components/utilities/Footer";

function HomePage() {
  return (
    <Container className="p-0" fluid>
      <Container className="my-5">
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
