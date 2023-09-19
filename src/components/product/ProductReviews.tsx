import { Row, Col, ProgressBar, Form, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { StarIcon } from "@heroicons/react/24/solid";
import { LoadingSpinner, Pagination } from "..";
import ProductReviewCard from "./ProductReviewCard";
import AllReviewsHook from "../../hooks/reviews/AllReviewsHook";
import AddReviewHook from "../../hooks/reviews/AddReviewHook";

const ProductReviews = ({ product }) => {
  const [reviewsResults, reviews, pageCount, getPage, loading] = AllReviewsHook(
    product,
    10
  );

  const [rate, onChangeRate, review, onChangeReview, handleAddReview] =
    AddReviewHook(product?._id);

  return (
    <Row className="bg-white mx-0 my-4 p-4">
      <Row className="border-bottom pb-2 mb-4">
        <h4 className="fw-bold p-0">تقييمات ومراجعات المنتج</h4>
      </Row>
      <Col xs={12} md={4} className="p-0 mb-5">
        <h5 className="fw-bold pb-3 px-0">التقييم العام</h5>
        <div className="d-flex align-items-center gap-2">
          <h2 className="fw-bold w-auto mb-0">
            ({product?.ratingsAverage || 0})
          </h2>
          <div className="text-success w-auto">
            <ReactStars
              size={28}
              activeColor="#28a745"
              count={5}
              value={product?.ratingsAverage || 0}
              edit={false}
            />
          </div>
        </div>

        <Row className="mt-3">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="d-flex align-items-center">
              <StarIcon width={"20px"} className="text-success" />
              <span className="fw-bold">5</span>
            </span>
            <ProgressBar
              now={80}
              variant="success"
              className="flex-grow-1 h-50"
            />
            <span>(125)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="d-flex align-items-center">
              <StarIcon width={"20px"} className="text-success" />
              <span className="fw-bold">4</span>
            </span>
            <ProgressBar
              now={30}
              variant="success"
              className="flex-grow-1 h-50"
            />
            <span>(24)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="d-flex align-items-center">
              <StarIcon width={"20px"} className="text-success" />
              <span className="fw-bold">3</span>
            </span>
            <ProgressBar
              now={11}
              variant="warning"
              className="flex-grow-1 h-50"
            />
            <span>(9)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="d-flex align-items-center">
              <StarIcon width={"20px"} className="text-success" />
              <span className="fw-bold">2</span>
            </span>
            <ProgressBar
              now={15}
              variant="danger"
              className="flex-grow-1 h-50"
            />
            <span>(15)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="d-flex align-items-center">
              <StarIcon width={"20px"} className="text-success" />
              <span className="fw-bold">1</span>
            </span>
            <ProgressBar
              now={2}
              variant="danger"
              className="flex-grow-1 h-50"
            />
            <span>(2)</span>
          </div>
        </Row>
      </Col>
      <Col xs={12} md={8} className="py-0 px-3">
        <Row className="d-flex justify-content-between align-items-center border-bottom pb-2 px-0 mx-0">
          <h5 className="w-auto fw-bold">تقييمات المشترين</h5>
          <h6 className="w-auto fw-bold">
            ( {product?.ratingsQuantity} ) تقييم
          </h6>
        </Row>

        <Row className="py-4 border-bottom">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
              value={review}
              onChange={onChangeReview}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button onClick={handleAddReview}>إضافة التقييم</Button>
          </div>
        </Row>

        {!loading ? (
          reviews?.length >= 1 ? (
            reviews?.map((review, index) => {
              return (
                <ProductReviewCard
                  product={product}
                  review={review}
                  key={index}
                />
              );
            })
          ) : (
            <h3 className="text-center py-4">لا يوجد تقييمات متاحة الآن</h3>
          )
        ) : (
          <LoadingSpinner padd={5} />
        )}

        {pageCount && getPage ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null}
      </Col>
    </Row>
  );
};

export default ProductReviews;
