import { Row } from "react-bootstrap";
import AdminOrdersContainer from "../../components/admin/order/AdminOrdersContainer";

const AdminOrdersPage = () => {
  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center px-3 pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">الطلبيات</h3>
      </Row>

      <AdminOrdersContainer />
    </Row>
  );
};

export default AdminOrdersPage;
