import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Checklist() {
  const [items, setItems] = useState([
    { id: 1, label: "Item 1", checked: false },
    { id: 2, label: "Item 2", checked: true },
    { id: 3, label: "Item 3", checked: false },
  ]);

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
    console.log("Checked items:", checkedItems);
    alert(
      `Checked items: ${checkedItems.map((item) => item.label).join(", ")}`
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      {items.map((item) => (
        <Form.Group key={item.id}>
          <Form.Check
            type="checkbox"
            id={`checkbox-${item.id}`}
            label={item.label}
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
          />
        </Form.Group>
      ))}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Checklist;
