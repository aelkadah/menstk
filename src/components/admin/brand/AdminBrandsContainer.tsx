import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../..";
import AdminBrandCard from "./AdminBrandCard";

import AllBrandsHook from "../../../hooks/brands/AllBrandsHook";

const AdminBrandsContainer = () => {
  const [brandResults, loading, brands, pageCount, getPage] = AllBrandsHook();

  return (
    <Row className="py-4">
      {!loading ? (
        brands?.length >= 1 ? (
          brands?.map((item, index) => {
            return (
              <Col xs={6} md={3} xl={2} key={index}>
                <AdminBrandCard brand={item} />
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

export default AdminBrandsContainer;
