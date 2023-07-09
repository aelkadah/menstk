import { Container } from "react-bootstrap";
import Header from "../components/utilities/Header";
import slide1 from "../assets/images/slider/slide1.jpg";
import slide2 from "../assets/images/slider/slide2.jpg";
import slide3 from "../assets/images/slider/slide3.jpg";

import BestSellers from "../components/product/BestSellers";
import FeaturedCategories from "../components/category/FeaturedCategories";

function HomePage() {
  return (
    <Container className="p-0" fluid>
      <Header />

      <Container className="my-5">
        <img className="w-100 rounded-4" src={slide1} alt="First slide" />
      </Container>

      <Container className="py-5 bg-white" fluid>
        <FeaturedCategories />
      </Container>

      <BestSellers />
    </Container>
  );
}

export default HomePage;
