import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Modal, Button, Form } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const UserAddressCard = ({ index, address }) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <Row className="bg-white p-4 mb-4" key={index}>
      <Row className="d-flex justify-content-between">
        <h5 className="fw-bold w-auto">{address?.alias}</h5>
        <div className="d-flex align-items-center gap-2 w-auto">
          <Link
            className="text-primary d-flex align-items-center"
            onClick={handleShowEdit}
          >
            <PencilSquareIcon width={"20px"} />
            <span className="me-1">تعديل</span>
          </Link>
          <Link
            className="text-danger d-flex align-items-center"
            onClick={handleShowDelete}
          >
            <TrashIcon width={"20px"} />
            <span className="me-1">حذف</span>
          </Link>
        </div>
      </Row>

      <Row className="mt-3">
        <div className="d-flex text-secondary">
          <span className="pe-0 ps-5">المدينة</span>
          <p className="fw-bold text-black">{address?.city}</p>
        </div>
        <div className="d-flex text-secondary">
          <span className="pe-0 ps-5">العنوان</span>
          <p className="text-black fw-bold w-75">{address?.details}</p>
        </div>
        <div className="d-flex text-secondary">
          <span className="pe-0 ps-5">الرمز البريدي</span>
          <p>{address?.postalCode}</p>
        </div>
        <div className="d-flex text-secondary">
          <span className="pe-0 ps-5">الهاتف</span>
          <p>{address?.phone}</p>
        </div>
      </Row>

      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex w-100" closeButton>
          <Modal.Title className="flex-grow-1">تعديل العنوان</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>نوع العنوان</Form.Label>
            <Form.Control
              type="text"
              placeholder="منزل , مكتب , شركة ,..."
              value={address?.alias}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>المدينة</Form.Label>
            <Form.Control
              type="text"
              placeholder="القاهرة , الجيزة , ..."
              value={address?.city}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>تفاصيل العنوان</Form.Label>
            <Form.Control
              type="text"
              placeholder="رقم المبنى , الشارع , الحي ,..."
              value={address?.details}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>الرمز البريدي</Form.Label>
            <Form.Control
              type="text"
              placeholder="11221"
              value={address?.postalCode}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>رقم الهاتف</Form.Label>
            <Form.Control
              type="text"
              placeholder="01012345678"
              value={address?.phone}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            إلغاء
          </Button>
          <Button>حفظ التعديلات</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex w-100" closeButton>
          <Modal.Title className="flex-grow-1">حذف العنوان</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            هل تريد حذف عنوان{" "}
            <span className="text-danger">{address?.alias}</span> ؟
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            إلغاء
          </Button>
          <Button variant="danger">حذف العنوان</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default UserAddressCard;
