import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SecTitle from "../utilities/SecTitle";
import ProductCard from "./ProductCard";

import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
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
  {
    _id: 1,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch1,
    images: [watch2, watch3, watch4, watch5],
    price: 8350,
  },
  {
    _id: 2,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch2,
    images: [watch1, watch3, watch4, watch5],
    price: 8350,
  },
  {
    _id: 3,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch3,
    images: [watch2, watch1, watch4, watch5],
    price: 8350,
  },
  {
    _id: 4,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch4,
    images: [watch1, watch3, watch2, watch5],
    price: 8350,
  },
  {
    _id: 5,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch5,
    images: [watch2, watch1, watch4, watch3],
    price: 8350,
  },
  {
    _id: 6,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch1,
    images: [watch2, watch3, watch4, watch5],
    price: 8350,
  },
  {
    _id: 7,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch2,
    images: [watch1, watch3, watch4, watch5],
    price: 8350,
  },
  {
    _id: 8,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch3,
    images: [watch2, watch1, watch4, watch5],
    price: 8350,
  },
  {
    _id: 9,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch4,
    images: [watch1, watch3, watch2, watch5],
    price: 8350,
  },
  {
    _id: 10,
    title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch5,
    images: [watch2, watch1, watch4, watch3],
    price: 8350,
  },
];

const BestSellers = () => {
  return (
    <Container>
      <SecTitle title="أفضل العروض" btnText="تسوق الآن" url="/products" />
      <Carousel
        responsive={responsive}
        arrows={true}
        rtl
        itemClass="mx-2"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="pb-5 pt-4"
      >
        {data
          ? data?.map((item, index) => {
              return <ProductCard product={item} key={index} />;
            })
          : null}
      </Carousel>
    </Container>
  );
};

export default BestSellers;
