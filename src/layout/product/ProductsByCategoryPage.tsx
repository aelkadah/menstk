import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../../components";
import ProductCard from "../../components/product/ProductCard";
import OneCategoryHook from "../../hooks/category/OneCategoryHook";
import CategoryProductsHook from "../../hooks/product/CategoryProductsHook";

const ProductsByCategoryPage = () => {
  const { id } = useParams();
  const [category, catLoading] = OneCategoryHook(id);
  const [productResults, products, pageCount, getPage, loading] =
    CategoryProductsHook(id, 10);

  return (
    <Container>
      <Row className="pt-4">
        <Row className="d-flex justify-content-between align-items-center">
          <h5 className="w-auto">
            نتائج البحث عن تصنيف
            <span className="fw-bold"> "{category?.name}"</span>
          </h5>
        </Row>

        <Row className="justify-content-center py-4">
          {!loading ? (
            products?.length >= 1 ? (
              products?.map((item, index) => {
                return (
                  <Col xs={10} sm={6} md={4} lg={3} key={index}>
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
      </Row>
    </Container>
  );
};

export default ProductsByCategoryPage;
