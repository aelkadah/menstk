import { Container } from "react-bootstrap";
import { PageTitle } from "../components";
import BrandsContainer from "../components/brand/BrandsContainer";

const BrandsPage = () => {
  return (
    <Container>
      <PageTitle
        title="جميع الماركات"
        desc="لدينا أكثر من 50 ماركة متاحة على متجرنا الآن ..."
      />

      <BrandsContainer />
    </Container>
  );
};

export default BrandsPage;
