import { Container, Row } from "react-bootstrap";
import Header from "./components/utilities/Header";
import bank_installment from "./assets/images/bank_installment.gif";

function App() {
  return (
    <Container fluid>
      <Header />

      {/* <Row>
        <img src={bank_installment} alt="Bank Installment" className="p-0" />
      </Row> */}
    </Container>
  );
}

export default App;
