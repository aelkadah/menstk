import { Col, Row } from "react-bootstrap";
import AdminCouponCard from "./AdminCouponCard";

const AdminCouponsContainer = () => {
  return (
    <Row className="px-3">
      <Col xs={12} md={6}>
        <AdminCouponCard />
      </Col>
      <Col xs={12} md={6}>
        <AdminCouponCard />
      </Col>
      <Col xs={12} md={6}>
        <AdminCouponCard />
      </Col>
    </Row>
  );
};

export default AdminCouponsContainer;
