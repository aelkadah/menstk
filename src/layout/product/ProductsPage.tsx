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
        <Row className="d-flex justify-content-between align-items-center">
          <h5 className="w-auto">
            20247 نتائج البحث عن
            <span className="fw-bold"> "ساعة"</span>
          </h5>
        </Row>
        <ProductsContainer />
      </Row>
    </Container>
  );
};

export default ProductsPage;
