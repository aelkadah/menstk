import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "./CategoryCard";

import iphone1 from "../../assets/images/iphone/1.jpg";
import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";

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
        <CategoryCard image={iphone1} title="إلكترونيات" />
        <CategoryCard image={watch1} title="أدوات منزلية متقدمة" />
        <CategoryCard image={watch2} title="ملابس" />
        <CategoryCard image={watch3} title="إكسسوارات" />
        <CategoryCard image={watch4} title="منتجات تنظيف" />
        <CategoryCard image={watch4} title="منتجات تنظيف" />
        <CategoryCard image={watch5} title="أدوات منزلية" />
        <CategoryCard image={iphone1} title="إلكترونيات" />
        <CategoryCard image={watch1} title="أدوات منزلية متقدمة" />
        <CategoryCard image={watch2} title="ملابس" />
      </Carousel>
    </Container>
  );
};

export default FeaturedCategories;
