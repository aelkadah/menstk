import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "..";
import BrandCard from "./BrandCard";
import AllBrandsHook from "../../hooks/brands/AllBrandsHook";

const BrandsContainer = () => {
  const [brandResults, brands, pageCount, getPage, loading] = AllBrandsHook();

  return (
    <Row className="py-4">
      {!loading ? (
        brands?.length >= 1 ? (
          brands?.map((item, index) => {
            return (
              <Col xs={6} md={3} xl={2} key={index}>
                <BrandCard brand={item} />
              </Col>
            );
          })
        ) : (
          <h3 className="text-center py-5">لا يوجد ماركات الآن</h3>
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

export default BrandsContainer;
