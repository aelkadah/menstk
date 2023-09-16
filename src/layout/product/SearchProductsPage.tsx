import { useParams } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../../components";
import { FunnelIcon } from "@heroicons/react/24/outline";
import ProductCard from "../../components/product/ProductCard";
import SearchProductsHook from "../../hooks/product/SearchProductsHook";

const SearchProductsPage = () => {
  const { word } = useParams();
  const [
    keyword,
    onChangeKeyword,
    handleSearch,
    productResults,
    products,
    pageCount,
    getPage,
    loading,
  ] = SearchProductsHook(word);

  return (
    <Container>
      <Row className="pt-4">
        <Row className="d-flex justify-content-between align-items-center">
          <h5 className="w-auto">
            <span className="fw-bold">{productResults || 0} </span>
            <span>من نتائج البحث عن</span>
            <span className="fw-bold"> {word || ""}... </span>
          </h5>
          <div className="d-flex justify-content-between align-items-center gap-1 w-auto">
            <FunnelIcon width="20px" />
            <Form.Select
              className="w-auto py-2 cursor-pointer"
              // value={sort}
              // onChange={onChangeSort}
              disabled
            >
              <option value="">ترتيب عشوائي</option>
              <option value="-sold">الأكثر مبيعاً</option>
              <option value="+price">الأقل سعراً</option>
              <option value="-price">الأعلى سعراً</option>
            </Form.Select>
          </div>
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
            <LoadingSpinner padd={5} />
          )}

          {pageCount && getPage ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </Row>
      </Row>
    </Container>
  );
};

export default SearchProductsPage;
