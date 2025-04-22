import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Checklist() {
  const initialState = [
    {
      id: 1,
      label: "Descriptions for sensory-based instructions",
      checked: false,
    },
    { id: 2, label: "No excessive motion behind any text", checked: false },
    { id: 3, label: "No harmful animation patterns", checked: false },
    { id: 4, label: "All images contain Alt text", checked: false },
    { id: 5, label: "All videos provide readable transcripts", checked: false },
  ];
  const [items, setItems] = useState(initialState);

  const handleCheckboxChange = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkedItems = items.filter((item) => item.checked);
    console.log([{ ...items, checked: false }]);
    setItems(initialState);
    console.log("Checked items:", checkedItems);
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center py-5">
        <Col className="col-4">
          <h2 style={{ paddingBottom: "2rem", fontSize: "1.9vw" }}>
            Is Your HTML Accessible? Lets Check
          </h2>
          <Form onSubmit={handleSubmit}>
            {items.map((item) => (
              <Form.Group key={item.id}>
                <Form.Check
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  label={item.label}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.id)}
                  style={{ fontSize: "1.5vw" }}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Checklist;
