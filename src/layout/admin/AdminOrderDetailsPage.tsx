import { Row, Col } from "react-bootstrap";
import watch1 from "../../assets/images/iphone/2.jpg";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const AdminOrderDetailsPage = () => {
  return (
    <Row className="py-3 px-3">
      <Row className="d-flex justify-content-between align-items-center pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">
          الطلبية
          <span className="me-2 ms-0">(11931)</span>
        </h3>
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

        <Col xs={12} md={4} className="">
          <Row className="bg-white py-4">
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
                    <p className="fw-bold m-0 text-black">محمد أبوتريكة</p>
                  </div>

                  <ArrowLeftIcon width={"20px"} className="text-black" />
                </div>
              </Row>

              <Row className="border-top border-bottom py-4">
                <h6 className="fw-bold mb-4">معلومات التواصل</h6>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <EnvelopeIcon width={"22px"} />
                  <span className="truncate-one">modyelkadah@gmail.com</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <PhoneIcon width={"22px"} />
                  <span>01021603376</span>
                </div>
              </Row>

              <Row className="pt-4">
                <h6 className="fw-bold mb-4">عنوان الشحن</h6>
                <p className="mb-1">مصر</p>
                <p className="m-0">
                  الدقهلية - المنصورة - مدينة السلام - شارع الجامع
                </p>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default AdminOrderDetailsPage;
