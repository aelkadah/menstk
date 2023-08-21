import { Modal, Form, Button } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteCategoryHook from "../../../hooks/category/DeleteCategoryHook";
import UpdateCategoryHook from "../../../hooks/category/UpdateCategoryHook";

const AdminCategoryCard = ({ category }) => {
  const [
    showUpdate,
    handleShowUpdate,
    handleCloseUpdate,
    name,
    onNameUpdate,
    onImgUpdate,
    handleUpdate,
  ] = UpdateCategoryHook(category);

  const [deleteShow, handleDeleteShow, handleDeleteClose, handleDelete] =
    DeleteCategoryHook(category);

  return (
    <div className="categoryCard m-0 p-0 mb-4">
      <div className="catImage">
        <img src={category?.image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-1">{category?.name}</h5>
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
          <Modal.Title className="flex-grow-1">حذف التصنيف</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <h6 className="m-0">هل انت متأكد من حذف التصنيف؟</h6>
          <span className="text-danger">{category?.name}</span>
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
          <Modal.Title className="flex-grow-1">تعديل التصنيف</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>عنوان التصنيف</Form.Label>
              <Form.Control type="text" value={name} onChange={onNameUpdate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>صورة التصنيف</Form.Label>
              <Form.Control type="file" onChange={onImgUpdate} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseUpdate}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            تعديل التصنيف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminCategoryCard;
