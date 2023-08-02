import { Link } from "react-router-dom";
import { Row, Card, Form, Button, Badge } from "react-bootstrap";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({ item }) => {
  return (
    <Row className="bg-white mb-3">
      <Card className="d-flex flex-row align-items-center py-2 border-0 rounded-0">
        <Card.Img src={item?.imageCover} alt="" style={{ maxWidth: "100px" }} />
        <Card.Body>
          <Card.Header className="bg-transparent d-flex align-items-start justify-content-between border-0 p-0 m-0">
            <Card.Title className="fw-bold fs-5">{item?.title}</Card.Title>
            <Card.Text className="fw-bold fs-5 mb-1 m-0 text-nowrap">
              {item?.price}.00
              <span className="fw-normal fs-6 text-secondary"> ج.م</span>
            </Card.Text>
          </Card.Header>
          <Card.Text className="text-secondary mb-3">{item?.brand}</Card.Text>
          <Card.Footer className="bg-transparent border-0 d-flex align-items-center justify-content-between p-0">
            <Form.Group size="sm" className="d-flex align-items-center mb-2">
              <Form.Label className="ms-1">الكمية:</Form.Label>
              <Button variant="light" className="fw-bold">
                -
              </Button>
              <Badge variant="white" className="bg-white text-black px-3 fs-5">
                22
              </Badge>
              <Button variant="light" className="fw-bold">
                +
              </Button>
            </Form.Group>
            <Link className="text-danger">
              <TrashIcon width={"20px"} />
              إزالة
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default CartItem;
