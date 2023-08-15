import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const AddProductPage = () => {
  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-start align-items-center px-3 pb-3">
        <Link className="backBtn" to={`/admin/products`}>
          <ArrowSmallRightIcon width={"20px"} />
        </Link>
        <h3 className="w-auto fw-bold m-0 mb-1 py-0 px-2">إضافة منتج</h3>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={10}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>اسم المنتج</Form.Label>
              <Form.Control type="text" placeholder="أدخل اسم المنتج هنا..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>وصف المنتج</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="أدخل وصف هنا..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>الكمية</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>السعر</Form.Label>
              <Form.Control type="text" placeholder="أدخل سعر المنتج هنا..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>السعر بعد الخصم</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل السعر بعد الخصم المنتج هنا..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>الماركة</Form.Label>
              <Form.Select>
                <option>إختر الماركة</option>
                <option value="1">الماركة 1</option>
                <option value="2">الماركة 2</option>
                <option value="3">الماركة 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>التصنيف الرئيسي</Form.Label>
              <Form.Select>
                <option>إختر التصنيف الرئيسي</option>
                <option value="1">التصنيف الرئيسي 1</option>
                <option value="2">التصنيف الرئيسي 2</option>
                <option value="3">التصنيف الرئيسي 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>التصنيف الفرعي</Form.Label>
              <Multiselect
                className="mt-1 text-end"
                placeholder="التصنيف الفرعي"
                // options={options}
                // onSelect={onSelect}
                // onRemove={onRemove}
                displayValue="name"
                style={{ color: "red" }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default AddProductPage;
