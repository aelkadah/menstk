import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "..";

import iphone1 from "../../assets/images/iphone/1.jpg";
import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";
import BrandCard from "./BrandCard";

const BrandsContainer = () => {
  const [loading, setloading] = useState(false);

  const data = [
    {
      image: iphone1,
      title: "إلكترونيات",
    },
    {
      image: watch1,
      title: "أدوات منزلية متقدمة",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: watch4,
      title: "إلكترونيات",
    },
    {
      image: watch5,
      title: "أدوات منزلية متقدمة",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: iphone1,
      title: "إلكترونيات",
    },
    {
      image: watch1,
      title: "أدوات منزلية متقدمة",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: iphone1,
      title: "إلكترونيات",
    },
    {
      image: watch1,
      title: "أدوات منزلية متقدمة",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
    {
      image: watch2,
      title: "منتجات تنظيف",
    },
    {
      image: watch3,
      title: "أدوات منزلية",
    },
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
              <BrandCard brand={item} />
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

export default BrandsContainer;
