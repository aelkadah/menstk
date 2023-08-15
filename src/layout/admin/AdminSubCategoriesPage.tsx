import { Row, Form, Button, Modal } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AdminSubCategoriesContainer from "../../components/admin/subcategory/AdminSubCategoriesContainer";
import AddSubCategoryHook from "../../hooks/subcategory/AddSubCategoryHook";

const AdminSubCategoriesPage = () => {
  const [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    category,
    onChangeCategory,
    categories,
    handleSubmit,
  ] = AddSubCategoryHook();

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
                  value={name}
                  onChange={onChangeName}
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>التصنيف الرئيسي</Form.Label>
                <Form.Select onChange={onChangeCategory}>
                  <option value={0}>اختر التصنيف الرئيسي</option>
                  {categories?.map((item, index) => {
                    return (
                      <option value={item?._id} key={index}>
                        {item?.name}
                      </option>
                    );
                  })}
                </Form.Select>
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

      <AdminSubCategoriesContainer />
    </Row>
  );
};

export default AdminSubCategoriesPage;
