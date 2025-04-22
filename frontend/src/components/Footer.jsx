import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom ">
      <Container fluid className="bg-primary bg-gradient shadow">
        <Row>
          <Col>&copy; Savion Sweeney April 22, 2025</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
