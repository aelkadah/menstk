import { Row, Col, Badge, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductDetails = ({ product }) => {
  return (
    <Col xs={12} md={6} lg={8}>
      <Row>
        <Col xs={12} lg={8} className="mb-5 mb-md-0">
          <Row className="px-2 mb-1">
            <Badge
              bg="dark"
              className="w-auto p-2 d-flex align-items-center gap-1"
            >
              <SparklesIcon height="15px" />
              الأكثر مبيعاً
            </Badge>
          </Row>
          <Row>
            <h5 className="fw-bold">{product?.title}</h5>
          </Row>
          <Row className="d-flex align-items-center gap-1 mb-3">
            <h6 className="text-black-50 mb-0 w-auto">
              الماركة:{" "}
              <Link to="/brands" className="text-black">
                سامسونج
              </Link>
            </h6>

            <span className="w-auto d-flex align-items-center gap-1">
              <Badge
                bg="secondary"
                className="w-auto px-1 d-flex align-items-center gap-1"
              >
                <StarIcon height="15px" />
                4.6
              </Badge>
              <span style={{ fontSize: "14px" }}>( 27 تقييم )</span>
            </span>
          </Row>

          {/* <Row className="border-bottom mb-3">
            <h6 className="fw-bold mb-1">الوصف:</h6>
            <p className="text-secondary">{product?.description}</p>
          </Row> */}

          <Row>
            <h6 className="text-black-50 mb-0">
              قبل:{" "}
              <span className="text-decoration-line-through">
                {product?.price}.99 جنيه
              </span>
            </h6>

            <h6 className="text-black-50 mb-0 pt-1">
              بعد:{" "}
              <span className="fw-bold fs-4 text-black">
                {product?.price}.99 جنيه
              </span>{" "}
              <span style={{ fontSize: "14px" }}>
                ( يشمل ضريبة القيمة المضافة )
              </span>
            </h6>

            <h6 className="text-black-50 mb-0 pt-2">
              وفّرت:{" "}
              <span className="fw-bold text-black" style={{ fontSize: "14px" }}>
                1200.00 جنيه
              </span>
              <Badge bg="success" className="ms-0 me-2 px-2">
                خصم 22%
              </Badge>
            </h6>
          </Row>

          {/* <Row className="bg-body-secondary mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quae deleniti minus. Omnis alias illo sunt. Dolor consectetur,
              distinctio consequatur id cum in ullam quo quos, vero, impedit
              exercitationem quas?
            </p>
          </Row> */}

          <Row className="mt-3 mb-4">
            <h6 className="fw-bold mb-2 px-1">الكمية:</h6>
            <Row className="d-flex justify-content-between gap-3">
              <Form.Select
                aria-label="Default select example"
                className="w-auto"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Button className="fw-bold w-auto flex-grow-1">
                أضِف إلى عربة التسوق
              </Button>
            </Row>
          </Row>

          <Row className="mb-3">
            <h6 className="fw-bold mb-1">الوصف:</h6>
            <p className="text-secondary m-0">{product?.description}</p>
            <p className="text-secondary">{product?.description}</p>
          </Row>
        </Col>
        <Col xs={12} lg={4} className="px-4">
          <Row>sadasd</Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductDetails;
