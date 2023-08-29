import { Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import ClearCartHook from "../../hooks/cart/ClearCartHook";

const CartContainer = ({ cartItems }) => {
  const [handleClearCart] = ClearCartHook();

  return (
    <Col xs={12} lg={6} className="mb-4">
      <h5 className="fw-bold mb-3">عربة التسوق</h5>

      {cartItems?.length >= 1 ? (
        cartItems?.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })
      ) : (
        <h3 className="pt-4">لا يوجد منتجات مضافة للعربة</h3>
      )}

      {cartItems?.length >= 1 ? (
        <Row className="justify-content-center mt-4">
          <Button
            variant="danger"
            className="fw-bold px-5 w-100"
            onClick={handleClearCart}
          >
            تفريغ العربة
          </Button>
        </Row>
      ) : null}
    </Col>
  );
};

export default CartContainer;
