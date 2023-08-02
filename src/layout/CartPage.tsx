import { Container, Row } from "react-bootstrap";
import PageTitle from "./../components/utilities/PageTitle";
import CartContainer from "../components/cart/CartContainer";
import CartCheckout from "../components/cart/CartCheckout";

const CartPage = () => {
  return (
    <Container className="bg-light pb-3" fluid>
      <Container>
        <Row className="mt-3">
          <PageTitle
            title="عربة التسوق"
            desc="لدينا آلاف المنتجات المتاحة من خلال مجموعتنا الكبيرة من البائعين. اطلب دلوقتي!"
          />
        </Row>
        <Row>
          <CartContainer />
          <CartCheckout />
        </Row>
      </Container>
    </Container>
  );
};

export default CartPage;
