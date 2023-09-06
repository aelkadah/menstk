import { Row, Col } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "..";
import ProductCard from "./ProductCard";
import AllProductsHook from "../../hooks/product/AllProductsHook";

const ProductsContainer = () => {
  const [productResults, products, pageCount, getPage, loading] =
    AllProductsHook(10);

  return (
    <Row className="justify-content-center py-4">
      {!loading ? (
        products?.length >= 1 ? (
          products?.map((item, index) => {
            return (
              <Col xs={10} sm={6} md={4} lg={4} key={index}>
                <ProductCard product={item} />
              </Col>
            );
          })
        ) : (
          <h3 className="text-center py-5">لا يوجد منتجات الآن</h3>
        )
      ) : (
        <LoadingSpinner />
      )}

      {pageCount && getPage ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </Row>
  );
};

export default ProductsContainer;
