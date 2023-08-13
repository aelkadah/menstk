import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AdminBrandCard = ({ brand }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="brandCard m-0 p-0">
      <div onClick={handleShow} className="brandImage">
        <img src={brand?.image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-3">{brand?.title}</h5>
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
          <Modal.Title className="flex-grow-1">حذف الماركة</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <h6 className="m-0">هل انت متأكد من حذف الماركة؟</h6>
          <span className="text-danger">{brand?.title}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="danger">تأكيد الحذف</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminBrandCard;
