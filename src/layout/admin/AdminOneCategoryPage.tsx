import { useParams } from "react-router-dom";
import { Row, Button, Modal, Form } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import OneCategoryHook from "../../hooks/category/OneCategoryHook";
import AddSubCategoryHook from "../../hooks/subcategory/AddSubCategoryHook";
import AdminSubCategoriesContainer from "../../components/admin/subcategory/AdminSubCategoriesContainer";

const AdminOneCategoryPage = () => {
  const { id } = useParams();
  const [loading, category] = OneCategoryHook(id);

  const [show, handleShow, handleClose, name, onChangeName, handleSubmit] =
    AddSubCategoryHook(category?._id);

  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">{`التصنيفات / ( ${category?.name} )`}</h3>
        <Button
          className="d-flex align-items-center gap-1"
          onClick={handleShow}
        >
          <PlusCircleIcon width={"25px"} />
          إضافة تصنيف فرعي
        </Button>

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
            <Modal.Title className="flex-grow-1">إضافة تصنيف فرعي</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>التصنيف الرئيسي</Form.Label>
                <Form.Select disabled>
                  <option value={category?._id}>{category?.name}</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>عنوان التصنيف الفرعي</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل عنوان التصنيف الفرعي هنا..."
                  value={name}
                  onChange={onChangeName}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              إلغاء
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              إضافة التصنيف الفرعي
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <AdminSubCategoriesContainer id={id} />
    </Row>
  );
};

export default AdminOneCategoryPage;
