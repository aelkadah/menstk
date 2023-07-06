import { Container } from "react-bootstrap";
import Header from "../components/utilities/Header";
import slide1 from "../assets/images/slider/slide1.jpg";
import slide2 from "../assets/images/slider/slide2.jpg";
import slide3 from "../assets/images/slider/slide3.jpg";

import BestSellers from "../components/product/BestSellers";

function HomePage() {
  return (
    <Container className="p-0" fluid>
      <Header />

      <Container className="mt-4">
        <img className="w-100 rounded-4" src={slide1} alt="First slide" />
      </Container>

      <BestSellers />
    </Container>
  );
}

export default HomePage;
