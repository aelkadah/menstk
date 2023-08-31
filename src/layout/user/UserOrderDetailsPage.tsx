import { Link, useParams } from "react-router-dom";
import { Row, Col, Badge } from "react-bootstrap";
import {
  ArrowSmallRightIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { LoadingSpinner } from "../../components";
import OneOrderHook from "../../hooks/order/OneOrderHook";

const UserOrderDetailsPage = () => {
  const { id } = useParams();
  const [order, loading] = OneOrderHook(id);

  return (
    <Row className="p-3">
      {!loading ? (
        order ? (
          <Row className="d-flex justify-content-between align-items-center pb-3 mb-3">
            <div className="w-auto d-flex justify-content-start align-items-center gap-2">
              <Link className="backBtn" to={`/user/orders`}>
                <ArrowSmallRightIcon width={"20px"} />
              </Link>
              <h3 className="w-auto fw-bold m-0 p-0">
                الطلبية
                <span className="me-2 ms-0">(11931)</span>
              </h3>
              <div className="w-auto d-flex justify-content-between gap-2">
                {order?.isPaid ? (
                  <Badge bg="success" className="p-2">
                    مدفوع
                  </Badge>
                ) : (
                  <Badge bg="danger" className="p-2">
                    غير مدفوع
                  </Badge>
                )}
                {order?.isDelivered ? (
                  <Badge bg="success" className="p-2">
                    تم الإستلام
                  </Badge>
                ) : (
                  <Badge bg="warning" className="p-2">
                    قيد الإنتظار
                  </Badge>
                )}

                <span className="d-flex align-items-center gap-1 border-end border-start-0 me-2 ms-0 px-2">
                  <CalendarDaysIcon width={"22px"} />
                  <span dir="ltr">
                    {order?.createdAt
                      ? new Date(order?.createdAt).toLocaleDateString()
                      : null}
                  </span>
                </span>
                <span className="d-flex align-items-center gap-1 border-end border-start-0  ms-0 px-2">
                  <ClockIcon width={"22px"} />
                  <span dir="ltr">
                    {order?.createdAt
                      ? new Date(order?.createdAt)
                          .toLocaleTimeString()
                          .split(" ")
                      : null}
                  </span>
                </span>
              </div>
            </div>
          </Row>
        ) : null
      ) : null}

      <Row className="mb-3">
        <Col xs={12} md={8} className="bg-white py-4 px-0">
          {!loading ? (
            order ? (
              order?.cartItems?.length >= 1 ? (
                order?.cartItems?.map((item, index) => {
                  return (
                    <Row
                      className="d-flex justify-content-start align-items-center gap-2 mb-5"
                      key={index}
                    >
                      <Col
                        xs={3}
                        className="w-auto d-flex justify-content-center align-items-center"
                      >
                        <img
                          src={item?.product?.imageCover}
                          alt={item?.product?.title}
                          width={"100px"}
                        />
                      </Col>

                      <Col xs={9} className="d-flex flex-column">
                        <h6 className="w-auto fw-bold truncate-two mb-2">
                          {item?.product?.title}
                        </h6>

                        <div className="d-flex flex-column gap-1">
                          <div className="d-flex align-items-center gap-4">
                            {item?.color != "" ? (
                              <h6 className="text-black-50 d-flex align-items-center gap-2">
                                اللون:
                                <div
                                  className="rounded-circle shadow-sm"
                                  style={{
                                    backgroundColor: item?.color,
                                    height: "25px",
                                    width: "25px",
                                  }}
                                ></div>
                              </h6>
                            ) : null}

                            <h6 className="text-black-50">
                              الكمية:
                              <span className="fw-bold text-black">
                                {" "}
                                {item?.quantity}
                              </span>
                            </h6>
                          </div>

                          <h6 className="text-black-50">
                            الإجمالي:{" "}
                            <span className="fw-bold text-black">
                              {item?.quantity} * {item?.price} ={" "}
                              {item?.quantity * item?.price} ج.م
                            </span>
                          </h6>
                        </div>
                      </Col>
                    </Row>
                  );
                })
              ) : (
                <h3 className="text-center h-100 d-flex flex-column justify-content-center">
                  الطلبية غير متاحة الآن
                </h3>
              )
            ) : (
              <h3 className="text-center">الطلبية غير متاحة الآن</h3>
            )
          ) : (
            <LoadingSpinner padd={5} />
          )}
        </Col>

        <Col xs={12} md={4} className="mt-4 mt-md-0">
          <Row className="bg-white px-2 py-4">
            <h5 className="fw-bold w-auto mb-4">فاتورة الطلبية</h5>
            {!loading ? (
              order ? (
                <Row>
                  <div className="d-flex justify-content-between">
                    <h6 className="w-auto">
                      المجموع الفرعي{" "}
                      <span className="fw-normal">( بعد الخصم )</span>
                    </h6>
                    <h6 className="w-auto">{order?.totalOrderPrice} ج.م</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="w-auto">رسوم الشحن</h6>
                    <h6 className="w-auto">{order?.taxPrice}.00 ج.م</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="w-auto">الضريبة</h6>
                    <h6 className="w-auto">{order?.taxPrice}.00 ج.م</h6>
                  </div>
                  <Row className="border-top border-opacity-50 mt-2 pt-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="w-auto fw-bold">
                        الإجمالي{" "}
                        <span className="fw-normal"> ( شامل الضريبة )</span>
                      </h6>
                      <h5 className="w-auto fw-bold">
                        {order?.totalOrderPrice} ج.م
                      </h5>
                    </div>
                  </Row>
                </Row>
              ) : (
                <h5 className="text-center">فاتورة الطلبية غير متاحة الآن</h5>
              )
            ) : (
              <LoadingSpinner padd={5} />
            )}
          </Row>

          <Row className="bg-white px-2 py-4 mt-4">
            <h5 className="fw-bold mb-4">عنوان الشحن</h5>
            {!loading ? (
              order ? (
                <Row>
                  <p className="mb-1 fw-medium">
                    {order?.shippingAddress?.city}
                  </p>
                  <p className="m-0">{order?.shippingAddress?.details}</p>
                  <p className="mt-1">{order?.shippingAddress?.phone}</p>
                </Row>
              ) : (
                <h5 className="text-center">عنوان الشحن غير متاح الآن</h5>
              )
            ) : (
              <LoadingSpinner padd={5} />
            )}
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default UserOrderDetailsPage;
