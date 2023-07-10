import { Container } from "react-bootstrap";
import { PageTitle } from "../components";
import CategoriesContainer from "../components/category/CategoriesContainer";

const CategoriesPage = () => {
  return (
    <Container>
      <PageTitle
        title="جميع الفئات"
        desc="لدينا أكثر من 100 فئة متاحة على متجرنا الآن ..."
      />

      <CategoriesContainer />
    </Container>
  );
};

export default CategoriesPage;
