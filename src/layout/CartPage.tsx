import { Container, Row } from "react-bootstrap";
import PageTitle from "./../components/utilities/PageTitle";
import CartContainer from "../components/cart/CartContainer";
import CartBill from "../components/cart/CartBill";

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
          <CartBill />
        </Row>
      </Container>
    </Container>
  );
};

export default CartPage;
