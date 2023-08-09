import { Row, Col, Button } from "react-bootstrap";
import CartItem from "./CartItem";

import laptop1 from "../../assets/images/products/dell_laptop/01.jpg";
import watch1 from "../../assets/images/products/watch/1.jpg";
import sultra1 from "../../assets/images/products/s23 ultra/01.jpg";
import lgqned1 from "../../assets/images/products/lgqned/01.jpg";
import pulse3d1 from "../../assets/images/products/pulse3d/01.jpg";
import airfryer1 from "../../assets/images/products/airfryer/01.jpg";

const CartContainer = () => {
  const data = [
    {
      imageCover: watch1,
      title: "ساعة سامسونج جالاكسي واتش",
      brand: "سامسونج",
      price: "8699",
    },
    {
      imageCover: watch1,
      title: "ساعة سامسونج جالاكسي واتش",
      brand: "سامسونج",
      price: "8699",
    },
    {
      imageCover: watch1,
      title: "ساعة سامسونج جالاكسي واتش",
      brand: "سامسونج",
      price: "8699",
    },
    {
      imageCover: watch1,
      title: "ساعة سامسونج جالاكسي واتش",
      brand: "سامسونج",
      price: "8699",
    },
  ];

  return (
    <Col xs={12} lg={6} className="mb-4">
      <h5 className="fw-bold mb-3">عربة التسوق</h5>

      {data?.length >= 1
        ? data?.map((item, index) => {
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
