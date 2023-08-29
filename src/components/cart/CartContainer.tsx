import { Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";

const CartContainer = ({ cartItems }) => {
  return (
    <Col xs={12} lg={6} className="mb-4">
      <h5 className="fw-bold mb-3">عربة التسوق</h5>

      {cartItems?.length >= 1
        ? cartItems?.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })
        : null}

      <Row className="justify-content-center mt-4">
        <Button variant="danger" className="fw-bold px-5">
          تفريغ العربة
        </Button>
      </Row>
    </Col>
  );
};

export default CartContainer;
