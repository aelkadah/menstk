import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AdminCategoryCard = ({ category }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="categoryCard m-0 p-0">
      <div onClick={handleShow} className="catImage">
        <img src={category?.image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-3">{category?.title}</h5>
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
          <Modal.Title className="flex-grow-1">حذف التصنيف</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <h6 className="m-0">هل انت متأكد من حذف التصنيف؟</h6>
          <span className="text-danger">{category?.title}</span>
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

export default AdminCategoryCard;
