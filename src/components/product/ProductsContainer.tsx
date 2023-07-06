import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
};

export default ProductsContainer;
