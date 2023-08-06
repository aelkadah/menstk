import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "./CategoryCard";

import mobiles from "../../assets/images/categories/mobiles.png";
import laptops from "../../assets/images/categories/laptops.png";
import tvs from "../../assets/images/categories/tvs.png";
import kitchen from "../../assets/images/categories/kitchen.png";
import clothes from "../../assets/images/categories/clothes.png";
import dumbbell from "../../assets/images/categories/dumbbell.png";
import sportsshoes from "../../assets/images/categories/sportsshoes.png";
import playstation from "../../assets/images/categories/playstation.png";

const FeaturedCategories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1199.98, min: 992 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 991.98, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767.98, min: 0 },
      items: 2,
    },
  };

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

  return (
    <Container>
      <Carousel
        responsive={responsive}
        arrows={true}
        rtl
        itemClass="mx-2"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        containerClass="pb-3"
      >
        {data
          ? data?.map((item, index) => {
              return <CategoryCard category={item} key={index} />;
            })
          : null}
      </Carousel>
    </Container>
  );
};

export default FeaturedCategories;
