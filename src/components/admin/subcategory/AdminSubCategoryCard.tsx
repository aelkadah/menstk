import { Col, Row } from "react-bootstrap";
import AdminSubCatCol from "./AdminSubCatCol";

const AdminSubCategoryCard = ({ item }) => {
  return (
    <Row className="bg-white mb-3 py-3 px-2 border border-1">
      <h5 className="fw-bold mb-3 px-2">التصنيف الرئيسي</h5>

      {item?.subcategories?.map((sub, index) => {
        return (
          <Col xs={12} sm={6} key={index}>
            <AdminSubCatCol sub={sub} />
          </Col>
        );
      })}
    </Row>
  );
};

export default AdminSubCategoryCard;
