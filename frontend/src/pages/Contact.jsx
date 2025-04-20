import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <Container
      className="mt-5 p-5"
      style={{ maxWidth: "600px", minHeight: "80vh" }}
    >
      <Form className="border border-4 rounded-3 p-3 shadow">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control type="password" placeholder="Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Subject" />
        </Form.Group>

        <Form.Label>Message</Form.Label>
        <textarea
          class="form-control mb-3"
          rows="4"
          placeholder="Message"
        ></textarea>
        <Button variant="primary" type="submit" className="shadow-lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
