import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "..";
import CategoryCard from "./CategoryCard";
import AllCategoriesHook from "../../hooks/category/AllCategoriesHook";

const CategoriesContainer = () => {
  const [loading, results, categories, pageCount, getPage] =
    AllCategoriesHook();

  return (
    <Row className="py-4">
      {!loading ? (
        categories?.length >= 1 ? (
          categories?.map((item, index) => {
            return (
              <Col xs={6} md={3} xl={2} key={index}>
                <CategoryCard category={item} />
              </Col>
            );
          })
        ) : (
          <h3 className="text-center py-5">لا يوجد تصنيفات الآن</h3>
        )
      ) : (
        <LoadingSpinner />
      )}

      {!loading && pageCount && getPage && (
        <Pagination pageCount={pageCount} onPress={getPage} />
      )}
    </Row>
  );
};

export default CategoriesContainer;
