import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import cashIcon from "../assets/images/payment/cash.svg";
import meeza from "../assets/images/payment/meeza.png";
import visa from "../assets/images/payment/visa.png";
import mastercard from "../assets/images/payment/mastercard.png";
import CheckoutHook from "../hooks/cart/CheckoutHook";

const CheckoutPage = () => {
  const [
    userCart,
    cash,
    onChangeCash,
    credit,
    onChangeCredit,
    addresses,
    chosenAddress,
    onChangeAddress,
    handleCheckout,
  ] = CheckoutHook();

  return (
    <Container className="bg-light py-3">
      <Row className="justify-content-center">
        <Col xs={12} lg={7}>
          <h5 className="fw-bold mb-3">عنوان الشحن</h5>
          <Row className="bg-white mb-4 p-3">
            <Row className="d-flex align-items-center justify-content-between py-2">
              <Form.Group className="d-flex align-items-center gap-2 w-auto">
                <Form.Label className="m-0">اختر العنوان:</Form.Label>
                {addresses?.length >= 1 ? (
                  <Form.Select
                    size="sm"
                    className="w-auto"
                    value={chosenAddress}
                    onChange={onChangeAddress}
                  >
                    {addresses?.map((item, index) => {
                      return (
                        <option value={index} key={index}>
                          {item?.alias}
                        </option>
                      );
                    })}
                  </Form.Select>
                ) : (
                  <Button to="/user/addresses" as={Link}>
                    إضافة عنوان
                  </Button>
                )}
              </Form.Group>

              {addresses ? (
                addresses[chosenAddress] ? (
                  <Row className="mt-3">
                    <p className="fw-bold text-black m-0">
                      {addresses[chosenAddress]?.city}
                    </p>
                    <p className="text-black fw-bold m-0">
                      {addresses[chosenAddress]?.details}
                    </p>
                    <p className="my-1">{addresses[chosenAddress]?.phone}</p>
                  </Row>
                ) : null
              ) : null}
            </Row>
          </Row>

          <h5 className="fw-bold mb-3">طريقة الدفع</h5>
          <Row className="bg-white p-3 mb-3">
            <Form className="d-flex flex-column gap-3">
              <Form.Group className="d-flex align-items-center justify-content-between">
                <Form.Check
                  reverse
                  type="checkbox"
                  className="d-flex gap-3 align-items-center flex-grow-1 mt-2 fw-bold"
                  label="نقداً عِند الإستلام"
                  // value={cash}
                  checked={cash}
                  onChange={onChangeCash}
                />
                <img src={cashIcon} alt="" height="25px" />
              </Form.Group>
              <Form.Group className="d-flex align-items-center">
                <Form.Check
                  reverse
                  type="checkbox"
                  className="d-flex gap-3 align-items-center flex-grow-1 mt-2 fw-bold"
                  label="بطاقة الخصم / الإئتمان"
                  checked={credit}
                  onChange={onChangeCredit}
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
                  {userCart?.totalCartPrice || 0}.00 <span>ج.م</span>
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
                  {userCart?.totalPriceAfterDiscount
                    ? userCart?.totalCartPrice -
                      userCart?.totalPriceAfterDiscount
                    : "0"}
                  <span> ج.م</span>
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
                {userCart?.totalPriceAfterDiscount ||
                  userCart?.totalCartPrice ||
                  0.0}
                <span className="fs-6 fw-normal"> ج.م</span>
              </h5>
            </Row>
          </Row>

          <Row className="my-3">
            {userCart ? (
              <Button className="w-100 py-3 fw-bold" onClick={handleCheckout}>
                تأكيد الطلبية
              </Button>
            ) : null}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
