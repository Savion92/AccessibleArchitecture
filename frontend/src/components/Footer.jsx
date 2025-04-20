import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer class="footer fixed-bottom ">
      <Container fluid className="bg-primary bg-gradient shadow">
        <Row>
          <Col>
            &copy; Savion Sweeney April 22, 2025
            <br />
            <br />
          </Col>
          <Col>Col 1</Col>
          <Col>Col 1</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
