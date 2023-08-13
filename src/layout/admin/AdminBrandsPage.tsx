import { useState } from "react";
import { Row, Form, Button, Modal } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AdminBrandsContainer from "../../components/admin/brand/AdminBrandsContainer";

const AdminBrandsPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-between align-items-center px-3 pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">الماركات</h3>
        <Button
          className="d-flex align-items-center gap-1"
          onClick={handleShow}
        >
          <PlusCircleIcon width={"25px"} />
          إضافة ماركة
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
            <Modal.Title className="flex-grow-1">إضافة ماركة</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>اسم الماركة</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل اسم الماركة هنا..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>صورة الماركة</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              إلغاء
            </Button>
            <Button variant="primary">إضافة الماركة</Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <AdminBrandsContainer />
    </Row>
  );
};

export default AdminBrandsPage;
