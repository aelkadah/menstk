import { Container } from "react-bootstrap";
import { PageTitle } from "../../components";
import ProductsContainer from "../../components/product/ProductsContainer";

const ProductsPage = () => {
  return (
    <Container>
      <PageTitle
        title="جميع المنتجات"
        desc="لدينا الكثير من المنتجات المتاحة على متجرنا الآن ..."
      />

      <ProductsContainer />
    </Container>
  );
};

export default ProductsPage;
