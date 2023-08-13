import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  Dropdown,
} from "react-bootstrap";
import ProductsContainer from "../../components/product/ProductsContainer";
import CheckboxTree from "react-checkbox-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faSquare,
  faChevronLeft,
  faChevronDown,
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const ProductsPage = () => {
  const nodes = [
    {
      value: "موبايلات",
      label: "موبايلات",
      // children: [{ value: "phobos", label: "Phobos" }],
    },
    { value: "لابتوبات", label: "لابتوبات" },
    { value: "تلفزيونات", label: "تلفزيونات" },
    { value: "ألعاب إلكترونية", label: "ألعاب إلكترونية" },
    { value: "أدوات مطبخ", label: "أدوات مطبخ" },
    { value: "ملابس", label: "ملابس" },
    { value: "أدوات رياضية", label: "أدوات رياضية" },
    { value: "أحذية رياضية", label: "أحذية رياضية" },
  ];

  const brands = [
    { id: 1, title: "سامسونج" },
    { id: 2, title: "أبل" },
    { id: 3, title: "أوبو" },
    { id: 4, title: "ديل" },
    { id: 5, title: "أديداس" },
    { id: 6, title: "نايكي" },
    { id: 7, title: "تومي" },
    { id: 8, title: "LC Waikiki" },
  ];

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  return (
    <Container>
      <Row className="pt-4">
        <Col xs={0} md={2} className="d-none d-md-inline-block p-0">
          <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
            <Accordion.Item
              eventKey="0"
              className="bg-transparent rounded-0 border-0"
            >
              <Accordion.Header className="p-0 d-flex justify-content-between align-items-center w-100">
                <h6 className="flex-grow-1 fw-bold text-end p-0 m-0">الفئة</h6>
              </Accordion.Header>
              <Accordion.Body className="pt-0 px-2">
                <CheckboxTree
                  nodes={nodes}
                  checked={checked}
                  expanded={expanded}
                  onCheck={(checked) => setChecked(checked)}
                  onExpand={(expanded) => setExpanded(expanded)}
                  nativeCheckboxes={true}
                  icons={{
                    check: <FontAwesomeIcon icon={faCheckSquare} />,
                    uncheck: <FontAwesomeIcon icon={faSquare} />,
                    halfCheck: <FontAwesomeIcon icon={faCheckSquare} />,
                    expandClose: <FontAwesomeIcon icon={faChevronLeft} />,
                    expandOpen: <FontAwesomeIcon icon={faChevronDown} />,
                    expandAll: <FontAwesomeIcon icon={faPlusSquare} />,
                    collapseAll: <FontAwesomeIcon icon={faMinusSquare} />,
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              className="bg-transparent rounded-0 border-0"
            >
              <Accordion.Header className="p-0 d-flex justify-content-between align-items-center w-100">
                <h6 className="flex-grow-1 fw-bold text-end p-0 m-0">
                  الماركة
                </h6>
              </Accordion.Header>
              <Accordion.Body className="d-flex flex-column gap-1 pt-0">
                {brands?.length >= 1
                  ? brands.map((item, index) => {
                      return (
                        <div
                          className="d-flex justify-content-between align-items-center"
                          key={index}
                        >
                          <Form.Check
                            type="checkbox"
                            label={item.title}
                            reverse
                          />
                          <span style={{ fontSize: "14px" }}>(5)</span>
                        </div>
                      );
                    })
                  : null}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col xs={12} md={10}>
          <Row className="d-flex justify-content-between align-items-center">
            <h5 className="w-auto">
              20247 نتائج البحث عن
              <span className="fw-bold"> "ساعة"</span>
            </h5>
            <div className="d-flex justify-content-between align-items-center gap-1 w-auto">
              <p className="m-0">ترتيب حسب</p>
              <Dropdown className="border border-2" align={"start"}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="bg-white p-2 text-dark border-0"
                >
                  الأكثر مبيعاً
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="text-end rounded-0 gap-0 py-0"
                  style={{ fontSize: "14px" }}
                >
                  <Dropdown.Item className="px-3 py-2">
                    الأكثر مبيعاً
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 py-2">
                    السعر: الأقل للأعلى
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 py-2">
                    السعر: الأعلى للأقل
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Row>
          <ProductsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
