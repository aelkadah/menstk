import { Row, Card, Form, Button } from "react-bootstrap";
import { TrashIcon } from "@heroicons/react/24/outline";
import { LoadingSpinner } from "..";
import RemoveCartItemHook from "../../hooks/cart/RemoveCartItemHook";
import UpdateQuantityHook from "../../hooks/cart/UpdateQuantityHook";

const CartItem = ({ item }) => {
  const [handleRemove] = RemoveCartItemHook(item?._id);
  const [qty, onChangeQty, handleUpdateQty] = UpdateQuantityHook(item);

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
              <Form.Group
                size="sm"
                className="d-flex align-items-center gap-2 mb-2"
              >
                <Form.Label className="ms-1">الكمية:</Form.Label>
                <Form.Control
                  type="number"
                  className="w-25 fw-bold py-2"
                  value={qty}
                  onChange={onChangeQty}
                />
                <Button className="py-2 px-3" onClick={handleUpdateQty}>
                  تغيير
                </Button>
              </Form.Group>
              <Button
                variant="outline-danger"
                className="p-2"
                onClick={handleRemove}
              >
                <TrashIcon width={"20px"} />
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
