import { Row, Col, Badge } from "react-bootstrap";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import watch1 from "../../assets/images/iphone/2.jpg";

const UserOrderDetailsPage = () => {
  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center pb-3 mb-3">
        <div className="w-auto d-flex justify-content-start align-items-center gap-2">
          <h3 className="w-auto fw-bold m-0 p-0">
            الطلبية
            <span className="me-2 ms-0">(11931)</span>
          </h3>
          <div className="w-auto d-flex justify-content-between gap-2">
            {/* <Badge bg="danger" className="p-2">
              غير مدفوع
            </Badge> */}
            <Badge bg="success" className="p-2">
              مدفوع
            </Badge>

            <Badge bg="warning" className="p-2">
              قيد الإنتظار
            </Badge>
            {/* <Badge bg="success" className="p-2">
              تم الإستلام
            </Badge> */}

            <span className="d-flex align-items-center gap-1 border-end border-start-0 me-2 ms-0 px-2">
              <CalendarDaysIcon width={"22px"} />
              <span>30/07/2023 10:15م</span>
            </span>
          </div>
        </div>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={8} className="bg-white py-4 px-0">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <Row
                className="d-flex justify-content-start gap-2 mb-4"
                key={index}
              >
                <Col xs={3} className="w-auto">
                  <img src={watch1} alt="product..." height={"150px"} />
                </Col>

                <Col
                  xs={9}
                  className="d-flex flex-column justify-content-between"
                >
                  <h5 className="w-auto fw-bold truncate-two">
                    ساعة يد جالاكسي 4 كلاسيك 4 كلاسيك مقاس 46 مم أسود ساعة يد
                    جالاكسي 4
                  </h5>

                  <div className="d-flex flex-column gap-1">
                    <div className="d-flex gap-4">
                      <h6 className="text-black-50">
                        الماركة: <span className="fw-bold text-black">أبل</span>
                      </h6>

                      <h6 className="text-black-50">
                        اللون:{" "}
                        <span className="fw-bold text-black">أبيض ثلجي</span>
                      </h6>
                    </div>
                    <h6 className="text-black-50">
                      الكمية: <span className="fw-bold text-black">3</span>
                    </h6>
                    <h6 className="text-black-50">
                      الإجمالي:{" "}
                      <span className="fw-bold text-black">
                        3 * 48999.00 = 147997.00 ج.م
                      </span>
                    </h6>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Col>

        <Col xs={12} md={4}>
          <Row className="bg-white px-2 py-4">
            <h5 className="fw-bold w-auto mb-4">فاتورة الطلبية</h5>

            <div className="d-flex justify-content-between">
              <h6 className="w-auto">المجموع الفرعي</h6>
              <h6 className="w-auto">149999.00 ج.م</h6>
            </div>

            <div className="d-flex justify-content-between">
              <h6 className="w-auto">رسوم الشحن</h6>
              <h6 className="w-auto">50.00 ج.م</h6>
            </div>

            {/* <Row className="border-top border-opacity-50 mt-2 pt-3">
                <div className="d-flex justify-content-between">
                  <h6 className="w-auto">الإجمالي</h6>
                  <h5 className="w-auto fw-bold">156999.00 ج.م</h5>
                </div>
              </Row> */}

            <Row className="border-top border-opacity-50 mt-2 pt-3">
              <div className="d-flex justify-content-between">
                <h6 className="w-auto text-black-50">
                  الإجمالي
                  <span className="fw-normal"> ( قبل الخصم )</span>
                </h6>
                <h6 className="w-auto text-decoration-line-through text-black-50">
                  156999.00 ج.م
                </h6>
              </div>

              <div className="d-flex justify-content-between">
                <h6 className="w-auto">الخصم</h6>
                <h6 className="w-auto text-danger">- 6000.00 ج.م</h6>
              </div>

              <div className="d-flex justify-content-between">
                <h6 className="w-auto fw-bold">
                  الإجمالي <span className="fw-normal"> ( شامل الضريبة )</span>
                </h6>
                <h5 className="w-auto fw-bold">150999.00 ج.م</h5>
              </div>
            </Row>
          </Row>

          <Row className="bg-white px-2 py-4 mt-4">
            <h5 className="fw-bold mb-4">عنوان رسوم الشحن</h5>
            <p className="mb-1">مصر</p>
            <p className="m-0">
              الدقهلية - المنصورة - مدينة السلام - شارع الجامع
            </p>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default UserOrderDetailsPage;
