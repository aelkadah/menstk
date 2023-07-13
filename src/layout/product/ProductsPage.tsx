import { Container, Row, Col } from "react-bootstrap";
import { PageTitle } from "../../components";
import ProductsContainer from "../../components/product/ProductsContainer";

const ProductsPage = () => {
  return (
    <Container>
      <PageTitle
        title="جميع المنتجات"
        desc="لدينا الكثير من المنتجات المتاحة على متجرنا الآن ..."
      />

      <Row>
        <Col xs={0} md={2} className="bg-danger d-none d-md-inline-block">
          <h1>aas</h1>
        </Col>
        <Col xs={12} md={10} className="bg-warning">
          <ProductsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
