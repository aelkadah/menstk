import { Container } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import iphone1 from "../../assets/images/iphone/1.jpg";
import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";

const FeaturedCategories = () => {
  return (
    <Container className="d-flex justify-content-between">
      <CategoryCard image={iphone1} title="إلكترونيات" />
      <CategoryCard image={watch1} title="أدوات منزلية متقدمة" />
      <CategoryCard image={watch2} title="ملابس" />
      <CategoryCard image={watch3} title="إكسسوارات" />
      <CategoryCard image={watch4} title="منتجات تنظيف" />
      <CategoryCard image={watch4} title="منتجات تنظيف" />
      <CategoryCard image={watch5} title="أدوات منزلية" />
    </Container>
  );
};

export default FeaturedCategories;
