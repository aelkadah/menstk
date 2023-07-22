import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import watch1 from "../../../assets/images/watch/1.jpg";
import watch2 from "../../../assets/images/watch/2.jpg";
import watch3 from "../../../assets/images/watch/3.jpg";
import watch4 from "../../../assets/images/watch/4.jpg";
import watch5 from "../../../assets/images/watch/5.jpg";
import { LoadingSpinner, Pagination } from "../..";
import AdminProductCard from "./AdminProductCard";

const AdminProductsContainer = () => {
  const [loading, setLoading] = useState(false);

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

  const getPage = () => {
    return;
  };

  return (
    <Row className="justify-content-center">
      {!loading ? (
        data.map((item, index) => {
          return (
            <Col xs={12} sm={6} md={6} xl={3} key={index}>
              <AdminProductCard product={item} />
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

export default AdminProductsContainer;
