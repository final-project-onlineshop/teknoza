import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./registerPage.scss";

const RegisterPage = () => {
  return (
    <Container className="register-page">
      <Helmet>
        <title>Register</title>
      </Helmet>
      
      <Form className="register-form">
      <h1>Register</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formPasswordConfirmation">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </Form>
    </Container>
  );
};

export default RegisterPage;
