import { Row, Button, Modal, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import DeleteReviewHook from "../../hooks/reviews/DeleteReviewHook";
import UpdateReviewHook from "../../hooks/reviews/UpdateReviewHook";

const ProductReviewCard = ({ product, review }) => {
  const [handleDeleteReview] = DeleteReviewHook(review?._id, product?._id);

  const [
    show,
    handleShow,
    handleClose,
    rate,
    onChangeRate,
    title,
    onChangeTitle,
    handleUpdateReview,
  ] = UpdateReviewHook(product?._id, review);

  return (
    <Row className="border-bottom pt-4 pb-1 mx-0">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <h5
            className="bg-light fw-bold rounded-circle p-0 d-flex justify-content-center align-items-center"
            style={{ width: "50px", height: "50px" }}
          >
            {review?.user?.name?.slice()[0]}
          </h5>
          <div>
            <h5 className="fw-bold m-0">{review?.user?.name}</h5>
            <h6 className="text-black-50 m-0">
              {review?.createdAt?.split("T")[0]}
            </h6>
          </div>
        </div>
        <div className="text-success">
          <ReactStars
            size={24}
            activeColor="#28a745"
            count={5}
            value={review?.ratings}
            // onChange={ratingChanged}
          />
        </div>
      </div>
      <div className="px-5">
        <p className="px-4">{review?.title}</p>
      </div>

      {review?.user?._id ==
      JSON.parse(localStorage.getItem("userInfo"))?._id ? (
        <Row className="d-flex justify-content-end gap-2 mb-3">
          <Button
            variant="secondary"
            className="d-flex align-items-center gap-1 py-2 px-3"
            onClick={handleShow}
          >
            <PencilSquareIcon width={"20px"} />
            تعديل
          </Button>
          <Button
            variant="danger"
            className="d-flex align-items-center gap-1 py-2 px-3"
            onClick={handleDeleteReview}
          >
            <PencilSquareIcon width={"20px"} />
            حذف
          </Button>
        </Row>
      ) : null}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="d-flex justify-content-between w-100 "
          closeButton
        >
          <Modal.Title className="flex-grow-1">تعديل التقييم</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="d-flex justify-content-between">
                تفاصيل التقييم
                <ReactStars
                  size={28}
                  activeColor="#28a745"
                  count={5}
                  value={rate}
                  onChange={onChangeRate}
                />
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={title}
                onChange={onChangeTitle}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button onClick={handleUpdateReview}>حفظ التعديلات</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default ProductReviewCard;
