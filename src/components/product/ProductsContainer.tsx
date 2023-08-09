import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { LoadingSpinner, Pagination } from "..";

import laptop1 from "../../assets/images/products/dell_laptop/01.jpg";
import laptop2 from "../../assets/images/products/dell_laptop/02.jpg";
import laptop3 from "../../assets/images/products/dell_laptop/03.jpg";
import laptop4 from "../../assets/images/products/dell_laptop/04.jpg";
import laptop5 from "../../assets/images/products/dell_laptop/05.jpg";
import watch1 from "../../assets/images/products/watch/1.jpg";
import watch2 from "../../assets/images/products/watch/2.jpg";
import watch3 from "../../assets/images/products/watch/3.jpg";
import watch4 from "../../assets/images/products/watch/4.jpg";
import watch5 from "../../assets/images/products/watch/5.jpg";
import sultra1 from "../../assets/images/products/s23 ultra/01.jpg";
import sultra2 from "../../assets/images/products/s23 ultra/02.jpg";
import sultra3 from "../../assets/images/products/s23 ultra/03.jpg";
import sultra4 from "../../assets/images/products/s23 ultra/04.jpg";
import lgqned1 from "../../assets/images/products/lgqned/01.jpg";
import lgqned2 from "../../assets/images/products/lgqned/02.jpg";
import lgqned3 from "../../assets/images/products/lgqned/03.jpg";
import lgqned4 from "../../assets/images/products/lgqned/04.jpg";
import lgqned5 from "../../assets/images/products/lgqned/05.jpg";
import pulse3d1 from "../../assets/images/products/pulse3d/01.jpg";
import pulse3d2 from "../../assets/images/products/pulse3d/02.jpg";
import pulse3d3 from "../../assets/images/products/pulse3d/03.jpg";
import pulse3d4 from "../../assets/images/products/pulse3d/04.jpg";
import pulse3d5 from "../../assets/images/products/pulse3d/05.jpg";
import airfryer1 from "../../assets/images/products/airfryer/01.jpg";
import airfryer2 from "../../assets/images/products/airfryer/02.jpg";
import airfryer3 from "../../assets/images/products/airfryer/03.jpg";

const ProductsContainer = () => {
  const [loading, setLoading] = useState(false);

  const data = [
    {
      _id: 1,
      title: "لاب توب للالعاب G15-5520 من ديل 12G انتل كور i7 12700H 14 نواة",
      description:
        "ديل لاب توب G15-5520 للالعاب - انتل كور i7-12700H الجيل الثاني عشر 14 نواة، 16 جيجا رام DDR5 4800 ميجاهرتز، 512 جيجا اس اس دي، انفيديا جي فورس RTX3050 4 جيجا GDDR6 جرافيكس، شاشة 15.6 انش FHD 120 هرتز، كيبورد باضاءة خلفية، اوبونتو، رمادي",
      imageCover: laptop1,
      images: [laptop2, laptop3, laptop4, laptop5],
      category: "لابتوبات",
      brand: "ديل",
      price: 35750,
      priceBefore: 37750,
      qty: 4,
      rate: 4.5,
      ratings: 11,
    },
    {
      _id: 2,
      title: "ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود",
      description:
        "تكتشف وتحلل خاصية تتبع النوم مراحل نومك بشكل شامل أثناء الراحة. تتيح لك خيارات القياس المحسّنة فحص مستويات الأكسجين في الدم وأنماط الشخير (لا أقصد إنك تشخر حقاً)",
      imageCover: watch1,
      images: [watch2, watch3, watch4, watch5],
      category: "ساعات",
      brand: "سامسونج",
      price: 8350,
      qty: 9,
      rate: 4,
      ratings: 25,
    },
    {
      _id: 3,
      title: "موبايل سامسونج جالاكسي S23 Ultra - 256G",
      description:
        "256 جيجا، اسود فانتوم، موبايل شبكة الجيل الخامس 5G، شريحتين اتصال، موبايل ذكي اندرويد",
      imageCover: sultra1,
      images: [sultra2, sultra3, sultra4],
      category: "موبايلات",
      brand: "سامسونج",
      price: 38700,
      priceBefore: 40000,
      qty: 3,
      rate: 4.7,
      ratings: 5,
    },
    {
      _id: 4,
      title:
        "شاشة تلفزيون LED مقاس 86 بوصة 4K كوانتوم دوت نانو سيل QNED80 من ال جي",
      description:
        "مقاس 86 بوصة 4K كوانتوم دوت نانو سيل QNED80 من ال جي، تصميم شاشة سينما 4K وتقنية المدى الديناميكي العالي HDR ونظام التشغيل ويب او اس سمارت ثين كيو، تعتيم موضعي - 86QNED806QA",
      imageCover: lgqned1,
      images: [lgqned2, lgqned3, lgqned4, lgqned5],
      category: "تلفزيونات",
      brand: "إل جي",
      price: 54999,
      priceBefore: 59999,
      qty: 7,
      rate: 4.2,
      ratings: 31,
    },
    {
      _id: 5,
      title:
        "سماعة P5AEACSNY38780 للراس لاسلكية ثلاثية الابعاد لـ PlayStation 5 بلس من سوني",
      description:
        "مقاس 86 بوصة 4K كوانتوم دوت نانو سيل QNED80 من ال جي، تصميم شاشة سينما 4K وتقنية المدى الديناميكي العالي HDR ونظام التشغيل ويب او اس سمارت ثين كيو، تعتيم موضعي - 86QNED806QA",
      imageCover: pulse3d1,
      images: [pulse3d2, pulse3d3, pulse3d4, pulse3d5],
      category: "إلعاب فيديو",
      brand: "سوني",
      price: 5999,
      priceBefore: 7999,
      qty: 2,
      rate: 4.4,
      ratings: 3,
    },
    {
      _id: 6,
      title: "فيليبس مقلاة هوائية من اسينشيال، سعة 6.2 لتر",
      description:
        "فيليبس مقلاة هوائية من اسينشيال، سعة 6.2 لتر، شاشة رقمية، اسود، 50 هرتز، جهد إمداد 220 فولت",
      imageCover: airfryer1,
      images: [airfryer2, airfryer3],
      category: "أدوات مطبخ",
      brand: "فيليبس",
      price: 7190,
      priceBefore: 7990,
      qty: 4,
      rate: 3.7,
      ratings: 2,
    },
  ];

  const getPage = () => {
    return;
  };

  return (
    <Row className="py-4 justify-content-center">
      {!loading ? (
        data.map((item, index) => {
          return (
            <Col xs={10} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={item} />
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

export default ProductsContainer;
