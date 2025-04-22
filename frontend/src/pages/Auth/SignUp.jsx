import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "./Login.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, username, password }) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, password }),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Something went wrong");

        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    onSuccess: () => {
      setFormData({ email: "", username: "", password: "" });
      toast.success("You have been signed up");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up attempted with:", { ...formData });
    mutate({ ...formData });
  };

  const handleInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="d-flex justify-content-center">
      <Row className="mt-5 login-wrapper">
        <Col xs={12} md={6} className="login-form-container shadow">
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={handleInputs}
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputs}
                name="username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputs}
                name="password"
              />
            </Form.Group>
            <Col style={{ marginLeft: "4rem" }}>
              <Button variant="primary" type="submit" className="w-59 shadow">
                {isPending ? "Loading..." : "Sign up"}
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
