import { Row } from "react-bootstrap";
import AdminCouponCard from "./AdminCouponCard";

const AdminCouponsContainer = () => {
  return (
    <Row>
      <AdminCouponCard />
      <AdminCouponCard />
      <AdminCouponCard />
    </Row>
  );
};

export default AdminCouponsContainer;
