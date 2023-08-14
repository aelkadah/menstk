import { Row, Form, Button, Modal } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AdminCategoriesContainer from "../../components/admin/category/AdminCategoriesContainer";
import AddCategoryHook from "../../hooks/category/AddCategoryHook";

const AdminCategoriesPage = () => {
  const [
    show,
    handleShow,
    handleClose,
    name,
    onNameChange,
    onImgChange,
    handleSubmit,
  ] = AddCategoryHook();

  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-between align-items-center px-3 pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">التصنيفات</h3>
        <Button
          className="d-flex align-items-center gap-1"
          onClick={handleShow}
        >
          <PlusCircleIcon width={"25px"} />
          إضافة تصنيف
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
            <Modal.Title className="flex-grow-1">إضافة تصنيف</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>عنوان التصنيف</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل عنوان التصنيف هنا..."
                  value={name}
                  onChange={onNameChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>صورة التصنيف</Form.Label>
                <Form.Control type="file" onChange={onImgChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              إلغاء
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              إضافة التصنيف
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <AdminCategoriesContainer />
    </Row>
  );
};

export default AdminCategoriesPage;
