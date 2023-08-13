import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { LoadingSpinner, Pagination } from "..";
import CategoryCard from "./CategoryCard";

import mobiles from "../../assets/images/categories/mobiles.png";
import laptops from "../../assets/images/categories/laptops.png";
import tvs from "../../assets/images/categories/tvs.png";
import kitchen from "../../assets/images/categories/kitchen.png";
import clothes from "../../assets/images/categories/clothes.png";
import dumbbell from "../../assets/images/categories/dumbbell.png";
import sportsshoes from "../../assets/images/categories/sportsshoes.png";
import playstation from "../../assets/images/categories/playstation.png";

const CategoriesContainer = () => {
  const [loading, setloading] = useState(false);

  const data = [
    { image: mobiles, title: "موبايلات" },
    { image: laptops, title: "لابتوبات" },
    { image: tvs, title: "تلفزيونات" },
    { image: playstation, title: "ألعاب إلكترونية" },
    { image: kitchen, title: "أدوات مطبخ" },
    { image: clothes, title: "ملابس" },
    { image: dumbbell, title: "أدوات رياضية" },
    { image: sportsshoes, title: "أحذية رياضية" },
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
              <CategoryCard category={item} />
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

export default CategoriesContainer;
