import { Container, Row } from "react-bootstrap";
import CartContainer from "../components/cart/CartContainer";
import CartBill from "../components/cart/CartBill";
import UserCartHook from "../hooks/cart/UserCartHook";

const CartPage = () => {
  const [numOfCartItems, userCart, loading] = UserCartHook();

  if (userCart) console.log(userCart);

  return (
    <Container className="bg-light py-3" fluid>
      <Container>
        <Row className="justify-content-center">
          <CartContainer cartItems={userCart?.cartItems} />
          <CartBill />
        </Row>
      </Container>
    </Container>
  );
};

export default CartPage;
