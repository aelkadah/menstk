import { Row, Card, Form, Button, Badge } from "react-bootstrap";
import { TrashIcon } from "@heroicons/react/24/outline";
import { LoadingSpinner } from "..";
import RemoveCartItemHook from "../../hooks/cart/RemoveCartItemHook";

const CartItem = ({ item }) => {
  const [handleRemove] = RemoveCartItemHook(item?._id);

  return (
    <Row className="bg-white mb-3">
      {item ? (
        <Card className="d-flex flex-row align-items-center py-2 border-0 rounded-0">
          <Card.Img src={item?.imageCover} style={{ maxWidth: "100px" }} />
          <Card.Body>
            <Card.Header className="bg-transparent d-flex align-items-start justify-content-between border-0 p-0 m-0">
              <Card.Title className="fw-bold fs-6 truncate-two">
                {item?.title}
              </Card.Title>
              <Card.Text className="fw-bold fs-5 mb-1 m-0 text-nowrap pe-4 ps-0">
                {item?.price}.00
                <span className="fw-normal fs-6 text-secondary"> ج.م</span>
              </Card.Text>
            </Card.Header>
            <Card.Text className="text-secondary mb-3 d-flex align-items-center gap-2">
              اللون:
              <span
                className="rounded-circle"
                style={{
                  backgroundColor: item?.color,
                  height: "30px",
                  width: "30px",
                }}
              ></span>
            </Card.Text>

            <Card.Footer className="bg-transparent border-0 d-flex align-items-center justify-content-between p-0">
              <Form.Group size="sm" className="d-flex align-items-center mb-2">
                <Form.Label className="ms-1">الكمية:</Form.Label>
                <Button variant="light" className="fw-bold">
                  -
                </Button>
                <Badge
                  variant="white"
                  className="bg-white text-black px-3 fs-5"
                >
                  {item?.quantity}
                </Badge>
                <Button variant="light" className="fw-bold">
                  +
                </Button>
              </Form.Group>
              <Button
                variant="outline-danger"
                className="px-3 py-2"
                onClick={handleRemove}
              >
                <TrashIcon width={"20px"} />
                إزالة
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      ) : (
        <LoadingSpinner padd={5} />
      )}
    </Row>
  );
};

export default CartItem;
