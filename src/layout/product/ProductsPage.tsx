import { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { PageTitle } from "../../components";
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
      value: "الفئة الرئيسية 1",
      label: "الفئة الرئيسية 1",
      children: [
        { value: "phobos", label: "Phobos" },
        { value: "deimos", label: "Deimos" },
      ],
    },
  ];

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  return (
    <Container>
      <PageTitle
        title="جميع المنتجات"
        desc="لدينا الكثير من المنتجات المتاحة على متجرنا الآن ..."
      />

      <Row>
        <Col xs={0} md={2} className="bg-danger d-none d-md-inline-block p-0">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0" className="rounded-0 border-0">
              <Accordion.Header className="p-0 d-flex justify-content-between align-items-center w-100">
                <h6 className="flex-grow-1 fw-bold text-end p-0 m-0">الفئة</h6>
              </Accordion.Header>
              <Accordion.Body className="p-0">
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
            <Accordion.Item eventKey="1" className="rounded-0 border-0">
              <Accordion.Header className="p-0 d-flex justify-content-between align-items-center w-100">
                <h6 className="flex-grow-1 fw-bold text-end p-0 m-0">
                  الماركة
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col xs={12} md={10} className="bg-warning">
          <ProductsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
