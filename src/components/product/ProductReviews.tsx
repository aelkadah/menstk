import { Row, Col } from "react-bootstrap";

const ProductReviews = ({ product }) => {
  return (
    <Row className="bg-white mx-0 my-4 p-4">
      <Row className="border-bottom pb-2 mb-4">
        <h5 className="fw-bold p-0">تقييمات ومراجعات المنتج</h5>
      </Row>
      <Col xs={12} md={6} className="p-0">
        <h5 className="fw-bold pb-3 px-0">التقييم العام</h5>
      </Col>
      <Col xs={12} md={6} className="p-0">
        <h5 className="fw-bold pb-3 px-0">تقييمات المشترين</h5>
      </Col>
    </Row>
  );
};

export default ProductReviews;
