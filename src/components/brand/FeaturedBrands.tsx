import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrandCard from "./BrandCard";

import samsung from "../../assets/images/brands/samsung.png";
import apple from "../../assets/images/brands/apple.png";
import oppo from "../../assets/images/brands/oppo.png";
import dell from "../../assets/images/brands/dell.png";
import adidas from "../../assets/images/brands/adidas.png";
import nike from "../../assets/images/brands/nike.png";
import tommy from "../../assets/images/brands/tommy.png";
import lcwaikiki from "../../assets/images/brands/lcwaikiki.png";

const FeaturedBrands = () => {
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
    { image: samsung, title: "سامسونج" },
    { image: apple, title: "أبل" },
    { image: oppo, title: "أوبو" },
    { image: dell, title: "ديل" },
    { image: adidas, title: "أديداس" },
    { image: nike, title: "نايكي" },
    { image: tommy, title: "تومي" },
    { image: lcwaikiki, title: "LC Waikiki" },
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
              return <BrandCard brand={item} key={index} />;
            })
          : null}
      </Carousel>
    </Container>
  );
};

export default FeaturedBrands;
