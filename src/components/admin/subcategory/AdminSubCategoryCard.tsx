import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteSubCategoryHook from "../../../hooks/subcategory/DeleteSubCategoryHook";

const AdminSubCategoryCard = ({ subcategory }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showDelete, handleShowDelete, handleCloseDelete, handleDelete] =
    DeleteSubCategoryHook(subcategory);

  return (
    <Col xs={12} sm={6}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="w-auto m-0">{subcategory?.name}</h6>
        <div className="w-auto d-flex align-items-center gap-2">
          <Link onClick={handleShowEdit} className="text-secondary">
            <PencilSquareIcon width={"24px"} />
          </Link>
          <Link onClick={handleShowDelete} className="text-danger">
            <TrashIcon width={"24px"} />
          </Link>
        </div>

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
            <Modal.Title className="flex-grow-1">
              تعديل التصنيف الفرعي
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <Form.Group className="mb-3">
              <Form.Label>التصنيف الرئيسي</Form.Label>
              <Form.Select disabled>
                <option value="1">التصنيف الرئيسي</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>عنوان التصنيف الفرعي</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل عنوان التصنيف الفرعي هنا..."
                value={"عنوان التصنيف الفرعي"}
              />
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
            <Modal.Title className="flex-grow-1">
              حذف التصنيف الفرعي
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <h6 className="m-0">هل انت متأكد من حذف التصنيف الفرعي؟</h6>
            <span className="text-danger">{subcategory?.name}</span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              إلغاء
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              تأكيد الحذف
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
};

export default AdminSubCategoryCard;
