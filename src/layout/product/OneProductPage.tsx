import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductImagesGallery from "../../components/product/ProductImagesGallery";
import ProductDetails from "../../components/product/ProductDetails";

import watch1 from "../../assets/images/watch/1.jpg";
import watch2 from "../../assets/images/watch/2.jpg";
import watch3 from "../../assets/images/watch/3.jpg";
import watch4 from "../../assets/images/watch/4.jpg";
import watch5 from "../../assets/images/watch/5.jpg";
import ProductReviews from "../../components/product/ProductReviews";

const OneProductPage = () => {
  const product = {
    _id: 1,
    title:
      "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
    description:
      "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
    imageCover: watch1,
    images: [watch2, watch3, watch4, watch5],
    price: 8350,
  };

  const images = [
    {
      original: watch1,
      thumbnail: watch1,
    },
    {
      original: watch2,
      thumbnail: watch2,
    },
    {
      original: watch3,
      thumbnail: watch3,
    },
    {
      original: watch4,
      thumbnail: watch4,
    },
    {
      original: watch5,
      thumbnail: watch5,
    },
  ];

  return (
    <Container>
      <Row className="px-2 mt-1 mb-3 d-flex align-items-center text-black-50">
        <Link className="w-auto px-2" to="/">
          الرئيسية
        </Link>
        {">"}
        <Link className="w-auto px-2" to="/category">
          إلكترونيات
        </Link>
        {">"}
        <Link className="w-auto px-2" to="/subcategory">
          ساعات ذكية
        </Link>
        {">"}
        <p className="w-auto m-0 px-2 fw-light">{product?.title}</p>
      </Row>

      <Row>
        <ProductImagesGallery images={images} />
        <ProductDetails product={product} />
      </Row>

      <ProductReviews product={product} />
    </Container>
  );
};

export default OneProductPage;
