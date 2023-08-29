import { Link } from "react-router-dom";
import { Row, Col, Badge, Button, Form } from "react-bootstrap";
import {
  CubeIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowTrendingUpIcon,
  ArrowUturnDownIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import OneBrandHook from "../../hooks/brands/OneBrandHook";
import AddToCartHook from "../../hooks/cart/AddToCartHook";

const ProductDetails = ({ product }) => {
  const [brand, brandLoading] = OneBrandHook(product?.brand);

  const [
    qty,
    onChangeQty,
    handleChooseColor,
    indexColor,
    handleAddToCart,
    loading,
  ] = AddToCartHook(product?._id);

  return (
    <Col xs={12} md={6} lg={8}>
      <Row>
        <Col xs={12} lg={8}>
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
              <Link to={`/brands/${brand?._id}`} className="text-black">
                {brand?.name}
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
              <span style={{ fontSize: "14px" }}>
                ( {product?.ratingsQuantity} تقييم )
              </span>
            </span>
          </Row>

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
                {product?.priceAfterDiscount}.99 جنيه
              </span>{" "}
              <span style={{ fontSize: "14px" }}>
                ( يشمل ضريبة القيمة المضافة )
              </span>
            </h6>

            <h6 className="text-black-50 mb-0 pt-2">
              وفّرت:{" "}
              <span className="fw-bold text-black" style={{ fontSize: "14px" }}>
                {product?.price - product?.priceAfterDiscount}.00 جنيه
              </span>
              <Badge bg="success" className="ms-0 me-2 px-2">
                خصم{" "}
                {Math.round(
                  (100 * product?.price) / product?.priceAfterDiscount - 100
                )}
                %
              </Badge>
            </h6>
          </Row>

          <Row className="d-flex align-items-center my-3">
            <h6 className="fw-bold w-auto m-0">الألوان المتاحة:</h6>
            {product?.colors
              ? product?.colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer rounded-circle me-1"
                      style={{
                        backgroundColor: color,
                        height: "30px",
                        width: "30px",
                        border:
                          indexColor === index ? "2px solid black" : "none",
                      }}
                      onClick={() => handleChooseColor(index, color)}
                    ></div>
                  );
                })
              : null}
          </Row>

          <Row className="mt-3 mb-4">
            <Row className="d-flex justify-content-between mx-0 p-0">
              <div className="w-auto">
                <h6 className="fw-bold mb-2 px-1">الكمية:</h6>
                <Form.Select aria-label="Product Quantity" className="w-auto">
                  {[...Array(product?.quantity)].map((x, i) => (
                    <option value={i + 1} key={i}>
                      {i + 1}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className="w-auto flex-grow-1">
                <h6 className="text-danger mb-2 px-1">
                  الكمية المتبقية ( {product?.quantity} )
                </h6>
                <Button
                  className="d-flex justify-content-center align-items-center w-100 fw-bold"
                  onClick={handleAddToCart}
                >
                  <ShoppingCartIcon width="20px" className="ms-1 me-0" />
                  أضِف إلى عربة التسوق
                </Button>
              </div>
            </Row>
          </Row>

          <Row className=" border-top py-4">
            <h6 className="fw-bold mb-1">الوصف:</h6>
            <p className="text-secondary m-0">{product?.description}</p>
          </Row>
        </Col>

        <Col xs={12} lg={4} className="px-4">
          <div className="d-flex justify-content-start align-items-start gap-2 mb-4 border-bottom pb-4">
            <div
              className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <ArrowTrendingUpIcon width={"20px"} />
            </div>
            <div>
              <div style={{ fontSize: "14px" }}>الأكثر مبيعاً</div>
              <div style={{ fontSize: "12px" }}>
                هذا المنتج يحصل على تقييمات ممتازة
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start gap-2 mb-4 border-bottom pb-4">
            <div
              className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <CubeIcon width={"20px"} />
            </div>
            <div>
              <div style={{ fontSize: "14px" }}>شحن مجاني</div>
              <div style={{ fontSize: "12px" }}>
                هذا المنتج يتم شحنه مجاناً لبعض المحافظات
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start gap-2 mb-4 border-bottom pb-4">
            <div
              className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <ArrowUturnDownIcon width={"20px"} />
            </div>
            <div>
              <div style={{ fontSize: "14px" }}>إرجاع مجاني</div>
              <div style={{ fontSize: "12px" }}>
                خدمة الإرجاع المجاني لبعض المنتجات في فترة الضمان
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductDetails;
