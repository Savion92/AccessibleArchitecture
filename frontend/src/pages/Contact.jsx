import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

// Keys have to be exposed to vite, will be exposed even if grabbed from ENV
const SERVICE_ID = "service_n8l9obn";
const TEMPLATE_ID = "template_xo7hx5t";
const PUBLIC_KEY = "vGCk7EfQBebLueNoo";

const Contact = () => {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n8l9obn",
        "template_xo7hx5t",
        e.target,
        "vGCk7EfQBebLueNoo"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error);
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
    e.target.reset();
    console.log(import.meta.env.VITE_PUBLIC_KEY);
  };

  return (
    <Container
      className="mt-5 p-5"
      style={{ maxWidth: "600px", minHeight: "80vh" }}
    >
      <Form
        className="border border-4 rounded-3 p-3 shadow"
        onSubmit={handleOnSubmit}
        ref={form}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              name="email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="from_name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="from_name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Message"
            name="message"
          ></textarea>
        </Form.Group>
        <Button variant="primary" type="submit" className="shadow-lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
