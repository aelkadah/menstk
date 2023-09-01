import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Badge, Button, Modal, Form } from "react-bootstrap";
import { LoadingSpinner } from "../../components";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowSmallRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import OneOrderHook from "../../hooks/order/OneOrderHook";
import UpdateOrderHook from "../../hooks/order/UpdateOrderHook";

const AdminOrderDetailsPage = () => {
  const { id } = useParams();
  const [order, loading] = OneOrderHook(id);

  const [
    show,
    handleShow,
    handleClose,
    paid,
    onChangePaid,
    delivered,
    onChangeDelivered,
    handleUpdate,
  ] = UpdateOrderHook(order);

  return (
    <Row className="py-3 px-3">
      {!loading ? (
        order ? (
          <Row className="d-flex justify-content-between align-items-center pb-3 mb-3">
            <div className="w-auto d-flex justify-content-start align-items-center gap-2">
              <Link className="backBtn" to={`/admin/orders`}>
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
            <div className="w-auto">
              <Button
                className="d-flex align-items-center gap-1"
                onClick={handleShow}
              >
                <ArrowPathIcon width={"25px"} />
                تحديث الحالة
              </Button>
            </div>

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
                <Modal.Title className="flex-grow-1">
                  تحديث حالة الطلب
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-3">
                <Form>
                  {order?.paymentMethodType == "cash" ? (
                    <Form.Group className="mb-3">
                      <Form.Label>طريقة الدفع:</Form.Label>
                      <Form.Check
                        type="checkbox"
                        label="كاش"
                        inline
                        reverse
                        checked
                        disabled
                      />
                      <Form.Check
                        type="checkbox"
                        label="بطاقة إلكترونية"
                        inline
                        reverse
                        disabled
                      />
                    </Form.Group>
                  ) : (
                    <Form.Group className="mb-3">
                      <Form.Label>طريقة الدفع:</Form.Label>
                      <Form.Check
                        type="checkbox"
                        label="كاش"
                        inline
                        reverse
                        disabled
                      />
                      <Form.Check
                        type="checkbox"
                        label="بطاقة إلكترونية"
                        inline
                        reverse
                        checked
                        disabled
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="d-flex align-items-center gap-2 mb-3">
                    <Form.Label className="m-0">حالة الدفع:</Form.Label>
                    <Form.Select
                      size="sm"
                      className="w-auto"
                      value={paid}
                      onChange={onChangePaid}
                      disabled={order?.isPaid ? true : false}
                    >
                      <option value={false}>لم يتم</option>
                      <option value={true}>تم الدفع</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="d-flex align-items-center gap-2 mb-3">
                    <Form.Label>حالة الإستلام:</Form.Label>
                    <Form.Select
                      size="sm"
                      className="w-auto"
                      value={delivered}
                      onChange={onChangeDelivered}
                      disabled={order?.isDelivered ? true : false}
                    >
                      <option value={false}>لم يصل</option>
                      <option value={true}>تم الإستلام</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  إلغاء
                </Button>
                {order?.isPaid && order?.isDelivered ? (
                  <Button variant="primary" disabled>
                    تحديث الحالة
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleUpdate}>
                    تحديث الحالة
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
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

        <Col xs={12} md={4} className="">
          <Row className="bg-white py-4">
            {!loading ? (
              order ? (
                <Row className="px-2">
                  <Row className="pb-4">
                    <h5 className="fw-bold w-auto mb-4">بيانات العميل</h5>
                    <div className="w-100 d-flex justify-content-between cursor-pointer">
                      <div className="flex-grow-1 d-flex align-items-center gap-2">
                        <div
                          style={{ width: "40px", height: "40px" }}
                          className="bg-light rounded-circle border border-secondary d-flex align-items-center justify-content-center"
                        >
                          <UserIcon width={"25px"} className="text-black" />
                        </div>
                        <p className="fw-bold m-0 text-black">
                          {order?.user?.name}
                        </p>
                      </div>

                      <ArrowLeftIcon width={"20px"} className="text-black" />
                    </div>
                  </Row>

                  <Row className="border-top border-bottom py-4">
                    <h6 className="fw-bold mb-4">معلومات التواصل</h6>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <EnvelopeIcon width={"22px"} />
                      <span className="truncate-one">{order?.user?.email}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoneIcon width={"22px"} />
                      <span>{order?.shippingAddress?.phone}</span>
                    </div>
                  </Row>

                  <Row className="pt-4">
                    <h6 className="fw-bold mb-4">عنوان الشحن</h6>
                    <p className="mb-1 fw-medium">
                      {order?.shippingAddress?.city}
                    </p>
                    <p className="m-0">{order?.shippingAddress?.details}</p>
                  </Row>
                </Row>
              ) : (
                <h5 className="text-center">معلومات الطلبية غير متاحة الآن</h5>
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

export default AdminOrderDetailsPage;
