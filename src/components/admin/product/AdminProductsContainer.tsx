import { Row, Col } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../..";
import AdminProductCard from "./AdminProductCard";
import AllProductsHook from "../../../hooks/product/AllProductsHook";

const AdminProductsContainer = () => {
  const [productResults, products, pageCount, getPage, loading] =
    AllProductsHook(10, "-createdAt");

  return (
    <Row className="justify-content-center py-4">
      {!loading ? (
        products?.length >= 1 ? (
          products?.map((item, index) => {
            return (
              <Col xs={12} sm={6} md={4} xl={3} key={index} className="mb-4">
                <AdminProductCard product={item} />
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

export default AdminProductsContainer;
