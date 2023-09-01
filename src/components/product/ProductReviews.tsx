import { Row, Col, ProgressBar } from "react-bootstrap";
import { StarIcon } from "@heroicons/react/24/solid";
import { Pagination } from "..";
import AllReviewsHook from "../../hooks/reviews/AllReviewsHook";

const ProductReviews = ({ product }) => {
  const [reviewsResults, reviews, pageCount, getPage, loading] = AllReviewsHook(
    product,
    10
  );

  return (
    <Row className="bg-white mx-0 my-4 p-4">
      <Row className="border-bottom pb-2 mb-4">
        <h4 className="fw-bold p-0">تقييمات ومراجعات المنتج</h4>
      </Row>
      <Col xs={12} md={4} className="p-0 mb-5">
        <h5 className="fw-bold pb-3 px-0">التقييم العام</h5>
        <h2 className="fw-bold">4.6</h2>
        <div className="text-success">
          <StarIcon width={"30px"} />
          <StarIcon width={"30px"} />
          <StarIcon width={"30px"} />
          <StarIcon width={"30px"} />
          <StarIcon width={"30px"} className="text-dark" />
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
          <h6 className="w-auto fw-bold">( 214 ) تقييم</h6>
        </Row>
        <Row className="border-bottom pt-4 pb-1 mx-0">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h5
                className="bg-light fw-bold rounded-circle p-0 d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                A
              </h5>
              <div>
                <h5 className="fw-bold m-0">Ahmed</h5>
                <h6 className="text-black-50 m-0">21/7/2023</h6>
              </div>
            </div>
            <div className="text-success">
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} className="text-dark" />
            </div>
          </div>
          <div className="px-4">
            <p>
              هذا المنتج ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج
              ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد
              قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد قمت بشراؤه
              وأثب فاعلية عالية جداً
            </p>
          </div>
        </Row>
        <Row className="border-bottom pt-4 pb-1 mx-0">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h5
                className="bg-light fw-bold rounded-circle p-0 d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                A
              </h5>
              <div>
                <h5 className="fw-bold m-0">Ahmed ElKadah</h5>
                <h6 className="text-black-50 m-0">21/7/2023</h6>
              </div>
            </div>
            <div className="text-success">
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} className="text-dark" />
            </div>
          </div>
          <div className="px-4">
            <p>
              هذا المنتج ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج
              ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد
              قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد قمت بشراؤه
              وأثب فاعلية عالية جداً
            </p>
          </div>
        </Row>
        <Row className="border-bottom pt-4 pb-1 mx-0">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h5
                className="bg-light fw-bold rounded-circle p-0 d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                A
              </h5>
              <div>
                <h5 className="fw-bold m-0">Ahmed ElKadah</h5>
                <h6 className="text-black-50 m-0">21/7/2023</h6>
              </div>
            </div>
            <div className="text-success">
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} className="text-dark" />
            </div>
          </div>
          <div className="px-4">
            <p>
              هذا المنتج ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج
              ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد
              قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد قمت بشراؤه
              وأثب فاعلية عالية جداً
            </p>
          </div>
        </Row>
        <Row className="border-bottom pt-4 pb-1 mx-0">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h5
                className="bg-light fw-bold rounded-circle p-0 d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                A
              </h5>
              <div>
                <h5 className="fw-bold m-0">Ahmed ElKadah</h5>
                <h6 className="text-black-50 m-0">21/7/2023</h6>
              </div>
            </div>
            <div className="text-success">
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} className="text-dark" />
            </div>
          </div>
          <div className="px-4">
            <p>
              هذا المنتج ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج
              ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد
              قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد قمت بشراؤه
              وأثب فاعلية عالية جداً
            </p>
          </div>
        </Row>
        <Row className="border-bottom pt-4 pb-1 mx-0">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h5
                className="bg-light fw-bold rounded-circle p-0 d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                A
              </h5>
              <div>
                <h5 className="fw-bold m-0">Ahmed ElKadah</h5>
                <h6 className="text-black-50 m-0">21/7/2023</h6>
              </div>
            </div>
            <div className="text-success">
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} />
              <StarIcon width={"20px"} className="text-dark" />
            </div>
          </div>
          <div className="px-4">
            <p>
              هذا المنتج ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج
              ممتاز لقد قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد
              قمت بشراؤه وأثب فاعلية عالية جداً هذا المنتج ممتاز لقد قمت بشراؤه
              وأثب فاعلية عالية جداً
            </p>
          </div>
        </Row>
        {pageCount && getPage ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null}
      </Col>
    </Row>
  );
};

export default ProductReviews;
