import { Modal, Form, Button } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteBrandHook from "../../../hooks/brands/DeleteBrandHook";
import UpdateBrandHook from "../../../hooks/brands/UpdateBrandHook";

const AdminBrandCard = ({ brand }) => {
  const [deleteShow, handleDeleteShow, handleDeleteClose, handleDelete] =
    DeleteBrandHook(brand);

  const [
    showUpdate,
    handleShowUpdate,
    handleCloseUpdate,
    name,
    onNameUpdate,
    onImgUpdate,
    handleUpdate,
  ] = UpdateBrandHook(brand);

  return (
    <div className="brandCard m-0 p-0 mb-4">
      <div className="brandImage">
        <img src={brand?.image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-1">{brand?.name}</h5>
      <div className="d-flex justify-content-between gap-2">
        <Button
          variant="secondary"
          className="d-flex align-items-center justify-content-between gap-1 p-2"
          onClick={handleShowUpdate}
        >
          <PencilSquareIcon width={"18px"} />
        </Button>
        <Button
          className="d-flex align-items-center justify-content-between gap-1 p-2"
          variant="danger"
          onClick={handleDeleteShow}
        >
          <TrashIcon width={"18px"} />
        </Button>
      </div>

      <Modal
        show={deleteShow}
        onHide={handleDeleteClose}
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
          <span className="text-danger">{brand?.name}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            تأكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showUpdate}
        onHide={handleCloseUpdate}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="d-flex justify-content-between w-100 "
          closeButton
        >
          <Modal.Title className="flex-grow-1">تعديل الماركة</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>عنوان الماركة</Form.Label>
              <Form.Control type="text" value={name} onChange={onNameUpdate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>صورة الماركة</Form.Label>
              <Form.Control type="file" onChange={onImgUpdate} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseUpdate}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            تعديل الماركة
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminBrandCard;
