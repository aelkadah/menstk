import { Col, Row } from "react-bootstrap";
import { LoadingSpinner } from "../..";
import AdminCouponCard from "./AdminCouponCard";
import AllCouponsHook from "../../../hooks/coupon/AllCouponsHook";

const AdminCouponsContainer = () => {
  const [coupons, loading] = AllCouponsHook();

  return (
    <Row className="px-3">
      {!loading ? (
        coupons?.length >= 1 ? (
          coupons?.map((item, index) => (
            <Col xs={12} md={6} key={index}>
              <AdminCouponCard coupon={item} />
            </Col>
          ))
        ) : (
          <h3 className="text-center py-5">لا يوجد كوبونات خصم الآن</h3>
        )
      ) : (
        <LoadingSpinner padd={5} />
      )}
    </Row>
  );
};

export default AdminCouponsContainer;
