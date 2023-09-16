import { useState } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";
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
import ProductsContainer from "../../components/product/ProductsContainer";
import SortProductsHook from "../../hooks/product/SortProductsHook";
import { FunnelIcon } from "@heroicons/react/24/outline";
import AllCategoriesHook from "../../hooks/category/AllCategoriesHook";
import AllBrandsHook from "../../hooks/brands/AllBrandsHook";

// { value: "لابتوبات", label: "لابتوبات" ,children: [{ value: "phobos", label: "Phobos" }],},

const ProductsPage = () => {
  const [sort, onChangeSort] = SortProductsHook();

  const [catResults, categories] = AllCategoriesHook(50);
  const [brandResults, brands] = AllBrandsHook(50);

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const catList = [];
  if (categories && categories?.length >= 1) {
    categories?.map((item, index) =>
      catList.push({ value: item?._id, label: item?.name })
    );
  }

  const brandsList = [];
  if (brands && brands?.length >= 1) {
    brands?.map((item, index) =>
      brandsList.push({ id: item?._id, title: item?.name })
    );
  }

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
                  nodes={catList}
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
                {brandsList?.length >= 1
                  ? brandsList.map((item, index) => {
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
                          {/* <span style={{ fontSize: "14px" }}>(5)</span> */}
                        </div>
                      );
                    })
                  : null}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col xs={12} md={10}>
          <Row className="d-flex justify-content-between align-items-center gap-2">
            <h5 className="w-auto">
              {/* <span className="fw-bold">2166 </span> */}
              المنتجات المتاحة على متجرنا الآن...
            </h5>
            <div className="d-flex justify-content-between align-items-center gap-1 w-auto">
              <FunnelIcon width="20px" />
              <Form.Select
                className="w-auto py-2 cursor-pointer"
                value={sort}
                onChange={onChangeSort}
              >
                <option value="">ترتيب عشوائي</option>
                <option value="-sold">الأكثر مبيعاً</option>
                <option value="+price">الأقل سعراً</option>
                <option value="-price">الأعلى سعراً</option>
              </Form.Select>
            </div>
          </Row>
          <ProductsContainer sort={sort} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
