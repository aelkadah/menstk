import { useState } from "react";
import { Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../..";
import AdminSubCategoryCard from "./AdminSubCategoryCard";

const AdminSubCategoriesContainer = () => {
  const [loading, setloading] = useState(false);

  const data = [
    { category: 1, subcategories: [1, 2, 3, 4] },
    { category: 2, subcategories: [5, 6, 7, 8] },
    { category: 3, subcategories: [1, 2, 3, 4] },
    { category: 4, subcategories: [5, 6, 7, 8] },
    { category: 5, subcategories: [1, 2, 3, 4] },
    { category: 6, subcategories: [5, 6, 7, 8] },
    { category: 7, subcategories: [5, 6, 7, 8] },
    { category: 8, subcategories: [5, 6, 7, 8] },
  ];

  const getPage = () => {
    return;
  };

  return (
    <Row className="py-2 px-3">
      {!loading ? (
        data.map((item, index) => {
          return <AdminSubCategoryCard item={item} key={index} />;
        })
      ) : (
        <LoadingSpinner />
      )}

      <Pagination pageCount={12} onPress={getPage} />
    </Row>
  );
};

export default AdminSubCategoriesContainer;
