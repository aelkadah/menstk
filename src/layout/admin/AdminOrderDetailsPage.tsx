import { Col, Row } from "react-bootstrap";
import watch1 from "../../assets/images/watch/1.jpg";

const AdminOrderDetailsPage = () => {
  return (
    <Row className="py-3 px-3">
      <Row className="d-flex justify-content-between align-items-center pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">تفاصيل الطلبية</h3>
        <h5 className="fw-bold p-0">11931#</h5>
      </Row>

      <Row className="bg-white mb-4 py-4">
        <Row className="d-flex justify-content-between px-0 mx-0">
          <h6 className="fw-bold w-auto">
            طلب رقم -<span className="me-1">11931#</span>
          </h6>
          <h6 className="fw-bold w-auto">بتاريخ - 27-9-2023</h6>
        </Row>

        <Row
          className="d-flex justify-content-start align-items-center px-0 mx-0 my-3"
          // key={index}
        >
          <Col xs={9} sm={10} lg={11}>
            <div>
              <img src={watch1} alt="" height={"150px"} />
            </div>
            <div>
              <h5 className="fw-bold truncate-two">
                ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود ساعة يد جالاكسي 4
                كلاسيك مقاس 46 مم أسود ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود
              </h5>
              <div className="d-flex gap-3 text-black-50">
                {/* <h6> */}
                <h6 className="text-nowrap">
                  الكمية:
                  <span className="fw-bold text-black"> 20</span>
                </h6>
                <h6 className="text-nowrap">
                  الإجمالي:
                  <span className="fw-bold text-black">
                    {" "}
                    2500.00 * 3 = 7500.00 ج.م
                  </span>
                </h6>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row className="d-flex justify-content-between px-0 mx-0 pt-3 border-top border-light">
          <div className="d-flex align-items-center w-auto">
            <h6 className="w-auto text-secondary me-0 ms-1 mt-2">الحالة:</h6>
            {order?.isDelivered ? (
              <>
                <span>وصل</span>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-success"
                  fixedWidth
                />
              </>
            ) : (
              <Form.Select
                size="sm"
                defaultValue={order?.isDelivered}
                onChange={onChangeIsDelivered}
              >
                <option value={false}>لم يصل</option>
                <option value={true}>تم الوصول</option>
              </Form.Select>
            )}
          </div>
          <div className="d-flex align-items-center w-auto">
            <h6 className="w-auto text-secondary me-0 ms-2 mt-2">الدفع:</h6>
            {order?.isPaid ? (
              <>
                <span>تم الدفع</span>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-success"
                  fixedWidth
                />
              </>
            ) : (
              <Form.Select
                size="sm"
                defaultValue={order?.isPaid}
                onChange={onChangeIsPaid}
              >
                <option value={false}>لم يتم</option>
                <option value={true}>تم الدفع</option>
              </Form.Select>
            )}
          </div>
          <div className="d-flex align-items-center w-auto mt-2">
            <h6 className="w-auto text-secondary me-0 ms-1">وسيلة الدفع:</h6>
            <h6 className="w-auto fw-bold">
              {order?.paymentMethodType === "cash" ? (
                <>
                  <span>كاش</span>
                  <FontAwesomeIcon
                    icon={faMoneyBills}
                    className="text-success"
                    fixedWidth
                  />
                </>
              ) : (
                <>
                  <span>اي حاجة</span>
                  <FontAwesomeIcon
                    icon={faMoneyBills}
                    className="text-success"
                    fixedWidth
                  />
                </>
              )}
            </h6>
          </div>
          <div className="d-flex align-items-end w-auto">
            <h5 className="fw-bold w-auto me-0 ms-1">
              {order?.totalOrderPrice}.00
            </h5>
            <h6 className="w-auto text-secondary">جنيه</h6>
          </div>
        </Row> */}
      </Row>

      {/* <Row className="bg-white mb-4 py-4 px-1 px-lg-4">
        <Row className="d-flex justify-content-between">
          <h5 className="fw-bold w-auto">بيانات العميل</h5>
        </Row>
        <Row className="py-3">
          <div className="d-flex text-secondary">
            <span className="pe-0 ps-5">الاسم</span>
            <p className="fw-bold text-black">{order?.user?.name}</p>
          </div>
          <div className="d-flex text-secondary">
            <span className="pe-0 ps-5">المدينة</span>
            <p className="fw-bold text-black">{order?.shippingAddress?.city}</p>
          </div>
          <div className="d-flex text-secondary">
            <span className="pe-0 ps-5">العنوان</span>
            <p className="text-black fw-bold w-75">
              {order?.shippingAddress?.details}
            </p>
          </div>
          <div className="d-flex text-secondary">
            <span className="pe-0 ps-5">الهاتف</span>
            <p className="fw-bold text-black">
              {order?.shippingAddress?.phone}
            </p>
          </div>
        </Row>
      </Row> */}
    </Row>
  );
};

export default AdminOrderDetailsPage;
