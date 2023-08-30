import { Button, Row, Modal, Form } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteCouponHook from "../../../hooks/coupon/DeleteCouponHook";
import UpdateCouponHook from "../../../hooks/coupon/UpdateCouponHook";

const AdminCouponCard = ({ coupon }) => {
  const [showDelete, handleShowDelete, handleCloseDelete, handleDeleteCoupon] =
    DeleteCouponHook(coupon?._id);

  const [
    showEdit,
    handleShowEdit,
    handleCloseEdit,
    name,
    onChangeName,
    expire,
    onChangeExpire,
    discount,
    onChangeDiscount,
    handleUpdateCoupon,
  ] = UpdateCouponHook(coupon);

  return (
    <Row className="bg-white p-3 mb-3">
      <Row>
        <h5 className="">
          كود الكوبون: <span className="fw-bold">{coupon?.name}</span>
        </h5>
        <h5 className="">
          نسبة الخصم: <span className="fw-bold">%{coupon?.discount}</span>
        </h5>
        <h5 className="">
          تاريخ الإنتهاء:{" "}
          <span className="fw-bold">{coupon?.expire.split("T", 1)}</span>
        </h5>
      </Row>
      <Row className="d-flex justify-content-end">
        <div className="w-auto d-flex align-items-center gap-2">
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center gap-1 py-2 px-2"
            onClick={handleShowEdit}
          >
            <PencilSquareIcon width={"24px"} />
            تعديل
          </Button>
          <Button
            variant="outline-danger"
            className="d-flex align-items-center gap-1 py-2 px-2"
            onClick={handleShowDelete}
          >
            <TrashIcon width={"24px"} />
            حذف
          </Button>
        </div>
      </Row>

      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="d-flex justify-content-between w-100 "
          closeButton
        >
          <Modal.Title className="flex-grow-1">تعديل كوبون الخصم</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <Form.Group className="mb-3">
            <Form.Label>كود الخصم</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل كود الخصم هنا..."
              value={name}
              onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نسبة الخصم</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل نسبة الخصم هنا..."
              value={discount}
              onChange={onChangeDiscount}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>تاريخ الإنتهاء</Form.Label>
            <Form.Control
              type="date"
              value={expire}
              onChange={onChangeExpire}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseEdit}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={handleUpdateCoupon}>
            حفظ التعديلات
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="d-flex justify-content-between w-100 "
          closeButton
        >
          <Modal.Title className="flex-grow-1">حذف كوبون الخصم</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <h6 className="m-0">هل انت متأكد من حذف الكوبون؟</h6>
          <span className="text-danger">{coupon?.name}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={handleDeleteCoupon}>
            تأكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default AdminCouponCard;
