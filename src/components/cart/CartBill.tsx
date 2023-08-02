import { Link } from "react-router-dom";
import { Row, Form, InputGroup, Button, Col } from "react-bootstrap";

const CartBill = () => {
  return (
    <Col xs={12} lg={4}>
      <Row className="bg-white p-3">
        <Row className="py-2">
          <h5 className="fw-bold mb-3">الفاتورة</h5>
          <InputGroup className="mt-2 mb-4">
            <Form.Control
              type="text"
              placeholder="أدخل كود الخصم هنا..."
              className="border"
            />
            <Button>تطبيق</Button>
          </InputGroup>

          <h6 className="d-flex justify-content-between text-secondary">
            المجموع
            <span className="text-black">
              157599.00
              <span>ج.م</span>
            </span>
          </h6>
          <h6 className="d-flex justify-content-between text-secondary">
            الخصم
            <span className="text-danger">
              - 2344.00 <span>ج.م</span>
            </span>
          </h6>
          <h6 className="d-flex justify-content-between text-secondary">
            <span>الشحن</span>
            <span className="text-primary">مجاني</span>
          </h6>
        </Row>

        <Row className="d-flex justify-content-between border-top py-3 mt-3">
          <h5 className="w-auto fw-bold">
            الإجمالي <span className="fw-normal fs-6"> (شامل الضريبة)</span>
          </h5>
          <h5 className="w-auto fw-bold">
            150999.00 <span className="fs-6 fw-normal">ج.م</span>
          </h5>
        </Row>
      </Row>
      <Row className="mt-3">
        <Button className="w-100" to="/checkout" as={Link}>
          إتمام الشراء
        </Button>
      </Row>
    </Col>
  );
};

export default CartBill;
