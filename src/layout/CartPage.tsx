import { Container, Row } from "react-bootstrap";
import CartContainer from "../components/cart/CartContainer";
import CartBill from "../components/cart/CartBill";

const CartPage = () => {
  return (
    <Container className="bg-light py-3" fluid>
      <Container>
        <Row className="justify-content-center">
          <CartContainer />
          <CartBill />
        </Row>
      </Container>
    </Container>
  );
};

export default CartPage;
