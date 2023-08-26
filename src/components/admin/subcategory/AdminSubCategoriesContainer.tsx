import { Row } from "react-bootstrap";
import { LoadingSpinner } from "../..";
import SubsOfCategoryHook from "../../../hooks/subcategory/SubsOfCategoryHook";
import AdminSubCategoryCard from "./AdminSubCategoryCard";

const AdminSubCategoriesContainer = ({ id }) => {
  const [loading, subs] = SubsOfCategoryHook(id);

  return (
    <Row className="bg-white p-4 mt-3">
      {!loading ? (
        subs?.length >= 1 ? (
          <h4 className="fw-bold mb-3 p-0">التصنيفات الفرعية</h4>
        ) : null
      ) : null}

      {!loading ? (
        subs?.length >= 1 ? (
          subs?.map((subcategory, index) => (
            <AdminSubCategoryCard subcategory={subcategory} key={index} />
          ))
        ) : (
          <h3 className="text-center py-5">لا يوجد تصنيفات فرعية الآن</h3>
        )
      ) : (
        <LoadingSpinner />
      )}
    </Row>
  );
};

export default AdminSubCategoriesContainer;
