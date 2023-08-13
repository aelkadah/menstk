import { Container, Row, Col, Form, Button } from "react-bootstrap";

import cashIcon from "../assets/images/payment/cash.svg";
import meeza from "../assets/images/payment/meeza.png";
import visa from "../assets/images/payment/visa.png";
import mastercard from "../assets/images/payment/mastercard.png";

const CheckoutPage = () => {
  return (
    <Container className="bg-light py-3">
      <Row className="justify-content-center">
        <Col xs={12} lg={6}>
          <h5 className="fw-bold mb-3">عنوان الشحن</h5>
          <Row className="bg-white mb-4 p-3">
            <Row className="d-flex align-items-center justify-content-between">
              <Form.Group className="d-flex align-items-center gap-2 w-auto">
                <Form.Label className="m-0">اختر العنوان:</Form.Label>
                <Form.Select size="sm" className="w-auto" defaultValue={0}>
                  <option value={0}>المنزل</option>
                  <option value={1}>المكتب</option>
                  <option value={2}>المكتب 2</option>
                </Form.Select>
              </Form.Group>
              <Row className="mt-4">
                <p className="fw-bold text-black m-0">الدقهلية</p>
                <p className="text-black fw-bold m-0">
                  المنصورة - مدينة السلام - شارع الجامع
                </p>
                <p className="my-1">01021603376</p>
              </Row>
            </Row>
          </Row>

          <h5 className="fw-bold mb-3">طريقة الدفع</h5>
          <Row className="bg-white p-3 mb-3">
            <Form className="d-flex flex-column gap-3">
              <Form.Group className="d-flex align-items-center justify-content-between">
                <Form.Check
                  reverse
                  type="radio"
                  value="cash"
                  label="نقداً عِند الإستلام"
                  className="d-flex gap-3 align-items-center flex-grow-1 mt-2 fw-bold"
                />
                <img src={cashIcon} alt="" height="25px" />
              </Form.Group>
              <Form.Group className="d-flex align-items-center">
                <Form.Check
                  reverse
                  type="radio"
                  value="card"
                  className="d-flex gap-3 align-items-center flex-grow-1 mt-2 fw-bold"
                  label="بطاقة الخصم / الإئتمان"
                />
                <img src={meeza} alt="" height="50px" />
                <img src={mastercard} alt="" height="50px" />
                <img src={visa} alt="" height="50px" />
              </Form.Group>
            </Form>
          </Row>
        </Col>

        <Col xs={12} lg={4}>
          <h5 className="fw-bold mb-3">الفاتورة</h5>
          <Row className="bg-white">
            <Row className="p-3">
              <h6 className="d-flex justify-content-between text-secondary">
                المجموع
                <span className="text-black">
                  157599.00
                  <span>ج.م</span>
                </span>
              </h6>
              <h6 className="d-flex justify-content-between text-secondary">
                <span>رسوم الشحن</span>
                <span className="text-success">مجاني</span>
              </h6>
              <h6 className="d-flex justify-content-between text-secondary">
                الخصم
                <span className="text-success">
                  - 2344.00 <span>ج.م</span>
                </span>
              </h6>
            </Row>

            <Row className="d-flex justify-content-between border-top py-4">
              <h5 className="w-auto fw-bold d-flex align-items-end gap-1">
                الإجمالي
                <span className="fw-normal fs-6 text-black-50">
                  (شامل الضريبة)
                </span>
              </h5>
              <h5 className="w-auto fw-bold">
                150999.00 <span className="fs-6 fw-normal">ج.م</span>
              </h5>
            </Row>
          </Row>

          <Row className="my-3">
            <Button className="w-100 py-3 fw-bold">تأكيد الطلبية</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
