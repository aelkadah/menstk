import { useState } from "react";
import { Button, Row, Modal, Form } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const AdminCouponCard = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <Row className="bg-white p-3 mb-3">
      <Row>
        <h5 className="">
          كود الكوبون: <span className="fw-bold">HAPPY_EID</span>
        </h5>
        <h5 className="">
          نسبة الخصم: <span className="fw-bold">%30</span>
        </h5>
        <h5 className="">
          تاريخ الإنتهاء: <span className="fw-bold">24 / 8 / 2023</span>
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
              // value={"HAPPY_EID"}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نسبة الخصم</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل نسبة الخصم هنا..."
              // value={"30"}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>تاريخ الإنتهاء</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseEdit}>
            إلغاء
          </Button>
          <Button variant="primary">حفظ التعديلات</Button>
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
          <span className="text-danger">HAPPY_EID</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            إلغاء
          </Button>
          <Button variant="danger">تأكيد الحذف</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default AdminCouponCard;
