import { useParams } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../../components";
import { FunnelIcon } from "@heroicons/react/24/outline";
import ProductCard from "../../components/product/ProductCard";
import OneBrandHook from "../../hooks/brands/OneBrandHook";
import BrandProductsHook from "../../hooks/product/BrandProductsHook";
import SortProductsHook from "../../hooks/product/SortProductsHook";

const ProductsByBrandPage = () => {
  const { id } = useParams();
  const [brand] = OneBrandHook(id);

  const [sort, onChangeSort] = SortProductsHook();
  const [productResults, products, pageCount, getPage, loading] =
    BrandProductsHook(id, 10, sort);

  return (
    <Container>
      <Row className="pt-4">
        <Row className="d-flex justify-content-between align-items-center">
          <h5 className="w-auto">
            <span className="fw-bold">{productResults} </span>
            نتيجة بحث عن ماركة
            <span className="fw-bold"> "{brand?.name}"</span>
          </h5>
          <div className="d-flex justify-content-between align-items-center gap-1 w-auto">
            <FunnelIcon width="20px" />
            <Form.Select
              className="w-auto py-2 cursor-pointer"
              value={sort}
              onChange={onChangeSort}
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

export default ProductsByBrandPage;
