import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../..";
import AdminCategoryCard from "./AdminCategoryCard";
import AllCategoriesHook from "../../../hooks/category/AllCategoriesHook";

const AdminCategoriesContainer = () => {
  const [loading, results, categories, pageCount, getPage] =
    AllCategoriesHook();

  return (
    <Row className="py-4">
      {!loading ? (
        categories?.length >= 1 ? (
          categories?.map((item, index) => {
            return (
              <Col xs={6} md={3} xl={2} key={index}>
                <AdminCategoryCard category={item} />
              </Col>
            );
          })
        ) : (
          <h3 className="text-center py-5">لا يوجد تصنيفات الآن</h3>
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

export default AdminCategoriesContainer;
