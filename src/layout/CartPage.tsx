import { Link } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import { LoadingSpinner } from "../components";
import CartContainer from "../components/cart/CartContainer";
import CartBill from "../components/cart/CartBill";
import UserCartHook from "../hooks/cart/UserCartHook";

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
              <Row className="bg-white d-flex flex-column align-items-center gap-4 py-5">
                <h3 className="fw-medium text-center pt-2">
                  لا يوجد منتجات مضافة إلى العربة
                </h3>
                <Button to="/products" as={Link} className="fw-bold">
                  تسوق الآن
                </Button>
              </Row>
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
