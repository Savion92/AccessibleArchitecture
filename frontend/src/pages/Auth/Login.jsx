import { useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: async ({ username, password }) => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        console.log(data);

        if (!res.ok) throw new Error(data.error || "Something went wrong");

        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Logged In");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in attempted with:", { ...formData });
    mutate({ ...formData });
  };

  const handleInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="d-flex justify-content-center">
      <Row className="mt-5 login-wrapper">
        <Col xs={12} md={6} className="login-form-container shadow">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit" className="w-50 shadow">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
