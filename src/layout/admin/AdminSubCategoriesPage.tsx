import { useState } from "react";
import { Row, Form, Button, Modal } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AdminSubCategoriesContainer from "../../components/admin/subcategory/AdminSubCategoriesContainer";

const AdminSubCategoriesPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-between align-items-center gap-3 px-3 pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">التصنيفات الفرعية</h3>
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
                <Form.Label>عنوان التصنيف الفرعي</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل عنوان التصنيف الفرعي هنا..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>التصنيف الرئيسي</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>اختر التصنيف الرئيسي</option>
                  <option value="1">التصنيف الرئيسي 1</option>
                  <option value="2">التصنيف الرئيسي 2</option>
                  <option value="3">التصنيف الرئيسي 3</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              إلغاء
            </Button>
            <Button variant="primary">إضافة التصنيف</Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <AdminSubCategoriesContainer />
    </Row>
  );
};

export default AdminSubCategoriesPage;
