import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "../..";
import AdminBrandCard from "./AdminBrandCard";

import samsung from "../../../assets/images/brands/samsung.png";
import apple from "../../../assets/images/brands/apple.png";
import oppo from "../../../assets/images/brands/oppo.png";
import dell from "../../../assets/images/brands/dell.png";
import adidas from "../../../assets/images/brands/adidas.png";
import nike from "../../../assets/images/brands/nike.png";
import tommy from "../../../assets/images/brands/tommy.png";
import lcwaikiki from "../../../assets/images/brands/lcwaikiki.png";

const AdminBrandsContainer = () => {
  const [loading, setloading] = useState(false);

  const data = [
    { image: samsung, title: "سامسونج" },
    { image: apple, title: "أبل" },
    { image: oppo, title: "أوبو" },
    { image: dell, title: "ديل" },
    { image: adidas, title: "أديداس" },
    { image: nike, title: "نايكي" },
    { image: tommy, title: "تومي" },
    { image: lcwaikiki, title: "LC Waikiki" },
  ];

  const getPage = () => {
    return;
  };

  return (
    <Row className="py-4">
      {!loading ? (
        data.map((item, index) => {
          return (
            <Col xs={6} md={3} lg={2} key={index}>
              <AdminBrandCard brand={item} />
            </Col>
          );
        })
      ) : (
        <LoadingSpinner />
      )}

      <Pagination pageCount={12} onPress={getPage} />
    </Row>
  );
};

export default AdminBrandsContainer;
