import { Container, Row } from "react-bootstrap";
import CartContainer from "../components/cart/CartContainer";
import CartBill from "../components/cart/CartBill";
import UserCartHook from "../hooks/cart/UserCartHook";
import { LoadingSpinner } from "../components";

const CartPage = () => {
  const [userCart, loading] = UserCartHook();

  return (
    <Container className="bg-light py-3" fluid>
      <Container>
        {!loading ? (
          userCart ? (
            <Row className="justify-content-center">
              <CartContainer cartItems={userCart?.data.cartItems} />
              <CartBill data={userCart?.data} />
            </Row>
          ) : (
            <Row>
              <h4 className="fw-bold mb-3">عربة التسوق</h4>
              <h3 className="pt-2">لا يوجد منتجات مضافة إلى العربة</h3>
            </Row>
          )
        ) : (
          <LoadingSpinner padd={5} />
        )}
      </Container>
    </Container>
  );
};

export default CartPage;
