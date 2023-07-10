import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "./CategoryCard";

import iphone1 from "../../assets/images/iphone/1.jpg";
import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";

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
      items: 3,
    },
  };

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
