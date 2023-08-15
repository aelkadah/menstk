import { Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../..";
import AdminSubCategoryCard from "./AdminSubCategoryCard";
import AllCategoriesHook from "../../../hooks/category/AllCategoriesHook";

const AdminSubCategoriesContainer = () => {
  const [loading, results, categories, pageCount, getPage] =
    AllCategoriesHook();

  return (
    <Row className="py-2 px-3">
      {!loading ? (
        categories?.length >= 1 ? (
          categories?.map((category, index) => {
            return <AdminSubCategoryCard category={category} key={index} />;
          })
        ) : (
          <h3 className="text-center py-5">لا يوجد تصنيفات رئيسية حتى الآن</h3>
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

export default AdminSubCategoriesContainer;
