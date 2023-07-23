import { Row } from "react-bootstrap";
import AdminOrderCard from "./AdminOrderCard";

const AdminOrdersContainer = () => {
  return (
    <Row className="px-3">
      <AdminOrderCard />
      <AdminOrderCard />
      <AdminOrderCard />
      <AdminOrderCard />
    </Row>
  );
};

export default AdminOrdersContainer;
