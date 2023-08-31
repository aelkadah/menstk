import { Link } from "react-router-dom";
import { Row, Form, InputGroup, Button, Col } from "react-bootstrap";
import ApplyCouponHook from "../../hooks/cart/ApplyCouponHook";

const CartBill = ({ data }) => {
  const [coupon, onChangeCoupon, handleApplyCoupon, loading] =
    ApplyCouponHook(data);

  return (
    <Col xs={12} lg={4}>
      <h5 className="fw-bold mb-3">الفاتورة</h5>
      <Row className="bg-white p-3">
        <Row className="py-2">
          <InputGroup className="mt-2 mb-4">
            <Form.Control
              type="text"
              placeholder="أدخل كود الخصم هنا..."
              className="border"
              value={coupon}
              onChange={onChangeCoupon}
            />
            <Button onClick={handleApplyCoupon}>تطبيق</Button>
          </InputGroup>

          <h6 className="d-flex justify-content-between text-secondary">
            المجموع
            <span className="text-black">
              {data?.totalCartPrice}.00
              <span> ج.م</span>
            </span>
          </h6>
          <h6 className="d-flex justify-content-between text-secondary">
            <span>رسوم الشحن</span>
            <span className="text-success">مجاني</span>
          </h6>
          <h6 className="d-flex justify-content-between text-secondary">
            الخصم
            <span className="text-danger">
              -{" "}
              {data?.totalPriceAfterDiscount
                ? data?.totalCartPrice - data?.totalPriceAfterDiscount
                : "0"}
              <span> ج.م</span>
            </span>
          </h6>
        </Row>

        <Row className="d-flex justify-content-between border-top py-3 mt-3">
          <h5 className="w-auto fw-bold d-flex align-items-end gap-1">
            الإجمالي
            <span className="fw-normal fs-6 text-black-50">(شامل الضريبة)</span>
          </h5>
          <h5 className="w-auto fw-bold">
            {data?.totalPriceAfterDiscount || data?.totalCartPrice}
            <span className="fs-6 fw-normal"> ج.م</span>
          </h5>
        </Row>
      </Row>
      <Row className="mt-3">
        <Button className="w-100 fw-bold py-3" to="/checkout" as={Link}>
          إتمام الشراء
        </Button>
      </Row>
    </Col>
  );
};

export default CartBill;
