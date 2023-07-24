import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const AdminOrderCard = () => {
  return (
    <Link to={`/admin/orders/1`}>
      <Row className="bg-white text-black mb-3 p-3 border-danger border">
        <Row>
          <Col xs={4}>
            <h6>5121#</h6>
            <h5></h5>
          </Col>
        </Row>
      </Row>
    </Link>

    // <Link to={`/admin/orders/1`}>
    //   <Row className="bg-white mb-4 py-4 px-1 px-lg-4 border border-1 rounded-3">
    //     <Row className="d-flex justify-content-between px-0 mx-0">
    //       <h6 className="fw-bold w-auto">
    //         طلب رقم -<span className="me-1">1001</span>
    //       </h6>
    //       <h6 className="fw-bold w-auto">بتاريخ - (24-7-2023)</h6>
    //     </Row>

    //     <Row className="d-flex flex-column px-0 py-3 mx-0">
    //       <h6 className="fw-bold w-auto text-secondary">
    //         اسم العميل
    //         <span className="text-black me-1">Ahmed ElKadah</span>
    //       </h6>
    //       <h6 className="fw-bold w-auto text-secondary">
    //         عنوان الشحن{" "}
    //         <span className="text-black me-1">
    //           المنصورة - مدينة السلام شارع الجامع
    //         </span>
    //       </h6>
    //     </Row>

    //     <Row className="d-flex justify-content-between px-0 mx-0">
    //       <div className="d-flex align-items-center w-auto">
    //         <h6 className="w-auto text-secondary me-0 ms-1">الحالة:</h6>
    //         <h6 className="w-auto fw-bold d-flex align-items-center">
    //           وصل
    //           {/* {order?.Delivered ? (
    //             <>
    //               <span>وصل</span>
    //               <FontAwesomeIcon
    //                 icon={faCircleCheck}
    //                 className="text-success"
    //                 fixedWidth
    //               />
    //             </>
    //           ) : (
    //             <>
    //               <span>لم يصل</span>
    //               <FontAwesomeIcon
    //                 icon={faCircleXmark}
    //                 className="text-danger"
    //                 fixedWidth
    //               />
    //             </>
    //           )} */}
    //         </h6>
    //       </div>
    //       <div className="d-flex w-auto">
    //         <h6 className="w-auto text-secondary me-0 ms-1">الدفع:</h6>
    //         <h6 className="w-auto fw-bold">
    //           تم الدفع
    //           {/* {order?.isPaid ? (
    //             <>
    //               <span>تم</span>
    //               <FontAwesomeIcon
    //                 icon={faCircleCheck}
    //                 className="text-success"
    //                 fixedWidth
    //               />
    //             </>
    //           ) : (
    //             <>
    //               <span>لم يتم</span>
    //               <FontAwesomeIcon
    //                 icon={faCircleXmark}
    //                 className="text-danger"
    //                 fixedWidth
    //               />
    //             </>
    //           )} */}
    //         </h6>
    //       </div>
    //       <div className="d-flex w-auto">
    //         <h6 className="w-auto text-secondary me-0 ms-1">وسيلة الدفع:</h6>
    //         <h6 className="w-auto fw-bold">
    //           كاش
    //           {/* {order?.paymentMethodType === "cash" ? (
    //             <>
    //               <span>كاش</span>
    //               <FontAwesomeIcon
    //                 icon={faMoneyBills}
    //                 className="text-success"
    //                 fixedWidth
    //               />
    //             </>
    //           ) : (
    //             <>
    //               <span>اي حاجة</span>
    //               <FontAwesomeIcon
    //                 icon={faMoneyBills}
    //                 className="text-success"
    //                 fixedWidth
    //               />
    //             </>
    //           )} */}
    //         </h6>
    //       </div>
    //       <div className="d-flex align-items-end w-auto">
    //         <h5 className="fw-bold w-auto me-0 ms-1">3000.00</h5>
    //         <h6 className="w-auto text-secondary">جنيه</h6>
    //       </div>
    //     </Row>
    //   </Row>
    // </Link>
  );
};

export default AdminOrderCard;
